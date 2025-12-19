import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  matches: []
};

const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    setMatches: (state, action) => {
      state.matches = action.payload;
    }
  }
});

export const { setMatches } = matchesSlice.actions;

// Selectors
export const selectMatches = (state) => state.matches.matches;

export default matchesSlice.reducer;
