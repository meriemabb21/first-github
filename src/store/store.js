import { configureStore } from '@reduxjs/toolkit';
import teamsReducer from './teamsSlice';
import matchesReducer from './matchesSlice';

export const store = configureStore({
  reducer: {
    teams: teamsReducer,
    matches: matchesReducer
  }
});
