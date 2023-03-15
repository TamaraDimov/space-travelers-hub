import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

export const getMissons = createAsyncThunk('missions/getMissons', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  missionList: [],
  status: 'idle',
  error: null,
};
export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const newState = state.missionList.map((mission) => {
        if (mission.id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      return { ...state, missionList: newState };
    },
    leaveMission: (state, action) => {
      const newState = state.missionList.map((mission) => {
        if (mission.id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
      return { ...state, missionList: newState };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMissons.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getMissons.fulfilled, (state, action) => {
        const newState = { ...state };
        const newArray = [];
        action.payload.forEach((key) => {
          newArray.push({
            id: key.mission_id,
            name: key.mission_name,
            description: key.description,
          });
        });
        newState.missionList = [...newArray];
        newState.status = 'loaded';
        return newState;
      })
      .addCase(getMissons.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },
});

export const allMissions = (state) => state.missionList.missionList;
export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
