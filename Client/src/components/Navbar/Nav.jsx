import SearchBar from "./SearchBar";
import { Link, NavLink } from "react-router-dom";


const Nav = ({onSearch}) => {
    return (
        <div>
            <SearchBar onSearch={onSearch}/>
            <Link to={"/about"}>
            <button> About </button>
            </Link>
            <Link to={"/home"}>
            <button> Home </button>
            </Link>
            <NavLink to = {"/favorites"}>
            <button> Favorites </button>
            </NavLink>
        </div>
    )
}

export default Nav;