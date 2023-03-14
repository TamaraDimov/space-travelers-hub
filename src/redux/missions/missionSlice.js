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
  missonList: [],
  status: 'idle',
  error: null,
  newStatus: '',
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
      .addCase(getMissons.fulfilled, (state, { payload }) => {
        const keys = Object.keys(payload);
        const newArray = [];
        keys.forEach((key) => {
          newArray.push(Object.assign({ id: key }, ...payload[key]));
        });
        state.getMissons = [...newArray];
        state.status = 'loaded';
      })
      .addCase(getMissons.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },
});

export default missionsSlice.reducer;
