import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <nav style={{display : "flex" , gap:'10px'}}>
            <Link to='/'>Equipes</Link>
            <Link to='/matches'>Matches</Link>
            <Link to='/favorites'>Favorites</Link>
        </nav>
    )
}