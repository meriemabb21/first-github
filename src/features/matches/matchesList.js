import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { selectMatches } from '../../store/matchesSlice';

export default function MatchesList() {
    const matches = useSelector(selectMatches);
    const [recherche, setRecherche] = useState('');
    const [resultat, setResultat] = useState([]);
    
    useEffect(() => {
        setResultat(matches);
    }, [matches]);
    
    function affichage() {
        if(recherche.length == 0) {
            setResultat(matches);
        } else {
            const list = matches.filter(
                (elem) =>
                    elem.teamA.name.toLowerCase() == recherche.toLowerCase() ||
                    elem.teamB.name.toLowerCase() == recherche.toLowerCase()
            );
            setResultat(list);
        }
    }
    
    return (
      <>
        <input type="text" onChange={(e) => setRecherche(e.target.value)}/>
        <button onClick={() => affichage()}>Recherche</button> 
        {resultat.length !== 0 && resultat.map((elem) => (
          <div key={elem.date + elem.time} style={{border : "1px solid black"}}>
            <p>Date : {elem.date}</p>
            <p>time : {elem.time}</p>
            <p>Lieu : {elem.venue}</p>
            <p>Team A : {elem.teamA.name}</p>
            <p>Team B : {elem.teamB.name}</p>
            <p>Score A : {elem.scoreA}</p>
            <p>Score B : {elem.scoreB}</p>
          </div>
        ))}
      </>
    );
}