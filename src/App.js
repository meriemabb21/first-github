import './App.css';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import teamsJson from './data/teams.json'
import playersJson from './data/players.json'
import matchesJson from './data/matches.json'
import TeamsList from './features/teams/teamsList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TeamDetails from './features/teams/teamDetails';
import MatchesList from './features/matches/matchesList';
import Favorites from './features/favorites/favorites';
import NavBar from './components/navbar';
import { setTeams } from './store/teamsSlice';
import { setMatches } from './store/matchesSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTeams(teamsJson.map(elem => ({
      ...elem,
      favoris: false,
      players: playersJson.filter(item => item.team_id == elem.id)
    }))));
    
    dispatch(setMatches(matchesJson.map(elem => ({
      ...elem,
      teamA: teamsJson.find(item => item.id == elem.teamA_id),
      teamB: teamsJson.find(item => item.id == elem.teamB_id)
    }))));
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<TeamsList />} />
          <Route path="/teamDetails/:id" element={<TeamDetails />} />
          <Route path="/matches" element={<MatchesList />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
