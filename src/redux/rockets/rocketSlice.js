import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  rocketList: [],
  toFetch: 'true',
};

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    return response.json();
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      const newState = { ...state };
      const rocketsCard = [];
      action.payload.forEach((rockCard) => {
        rocketsCard.push({
          id: rockCard.rocket_id,
          name: rockCard.rocket_name,
          description: rockCard.description,
          image: rockCard.flickr_images,
        });
      });
      newState.rocketList = rocketsCard;
      newState.toFetch = false;
      return newState;
    });
  },
});

export default rocketsSlice.reducer;
