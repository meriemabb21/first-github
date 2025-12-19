import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux';
import { selectTeamById } from '../../store/teamsSlice';

export default function TeamDetails() {
    const { id } = useParams();
    const team = useSelector(state => selectTeamById(state, id));
    
    if (!team) {
        return <div>Team not found</div>;
    }
    
    const players = team.players;
    
    return(
    <div style={{border : "1px solid black"}}>
              <img src={team.logoUrl}></img>
              <h3>Name team : {team.name}</h3>
              <p>Coach : {team.coach}</p>
              <p>Fifa Ranking : {team.fifaRanking}</p>
              <p>Players : {players.map(elem=>
                <ul key={elem.name}> 
                    <li><b>Name: {elem.name}</b></li>
                    <li>Position : {elem.position}</li>
                    <li>Goals :{elem.goals}</li>
                    <li>Assists : {elem.assists}</li>
                </ul>)}
              </p>
              
    </div>
    )
}