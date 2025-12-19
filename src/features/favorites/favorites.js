import { useSelector, useDispatch } from 'react-redux';
import { selectFavoriteTeams } from '../../store/favouritesSlice';
import { toggleFavorite } from '../../store/teamsSlice';

export default function Favorites() {
    const favorites = useSelector(selectFavoriteTeams);
    const dispatch = useDispatch();
    
    return (
      <>
        {favorites.map((elem) => (
          <div key={elem.id} style={{ border: "1px solid black" }}>
            <img src={elem.logoUrl} alt={elem.name}></img>
            <p>{elem.name}</p>
            <p>{elem.coach}</p>
            <p>{elem.fifaRanking}</p>
            <button onClick={() => dispatch(toggleFavorite(elem.id))}>Retirer</button>
          </div>
        ))}
      </>
    );
}