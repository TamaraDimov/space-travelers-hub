import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    // missions:missionsReducer,
  },
});

export default store;
