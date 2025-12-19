import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teams: []
};

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setTeams: (state, action) => {
      state.teams = action.payload;
    },
    toggleFavorite: (state, action) => {
      const team = state.teams.find(team => team.id === action.payload);
      if (team) {
        team.favoris = !team.favoris;
      }
    }
  }
});

export const { setTeams, toggleFavorite } = teamsSlice.actions;

// Selectors
export const selectTeams = (state) => state.teams.teams;
export const selectTeamById = (state, teamId) => 
  state.teams.teams.find(team => team.id === teamId);

export default teamsSlice.reducer;
