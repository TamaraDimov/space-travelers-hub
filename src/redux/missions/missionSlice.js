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

export default missionsSlice.reducer;
