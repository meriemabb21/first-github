import { createSelector } from '@reduxjs/toolkit';
import { selectTeams } from './teamsSlice';

// Selector to get favorite teams
export const selectFavoriteTeams = createSelector(
  [selectTeams],
  (teams) => teams.filter(team => team.favoris === true)
);
