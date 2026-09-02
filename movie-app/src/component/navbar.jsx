import { NavLink } from "react-router-dom";

const Navbar = () => {

    return(
        <nav>
            <h2>Movie Box</h2>

            <NavLink to="/">Home</NavLink>

            <NavLink to="/actors">Actors</NavLink>

            <NavLink to="/actordetails">Actor Details</NavLink>

            <NavLink to="/tvshows">Tvshows</NavLink>

            <NavLink to="/animations">Animations</NavLink>
        </nav>
    )
}

export default Navbar;