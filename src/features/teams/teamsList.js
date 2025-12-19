import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { selectTeams, toggleFavorite } from '../../store/teamsSlice';

export default function TeamsList() {
  const teams = useSelector(selectTeams);
  const dispatch = useDispatch();

  return (
    <div>
      {teams.map((elem) => (
        <div key={elem.id} style={{border : "1px solid black"}}>
          <img src={elem.logoUrl} alt={elem.name}></img>
          <Link to={`/teamDetails/${elem.id}`}><p>{elem.name}</p></Link>
          <p>{elem.coach}</p>
          <p>{elem.fifaRanking}</p>
          {/* <p>Joueurs:{elem.players.map(item=><span>{item.name}/</span>)}</p> */}
          <button onClick={() => dispatch(toggleFavorite(elem.id))}>
            {elem.favoris == true ? "💖":"💔"}
          </button>
        </div>
      ))}
    </div>
  );
}