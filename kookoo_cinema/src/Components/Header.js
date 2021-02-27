import React from 'react';
import {Link} from "react-router-dom";

const Header=()=>{
    return(
    <div>
        <ul>
            <li>
                <Link to="/movie_lookup">Movie_lookup</Link>
            </li>
            <li>
                <Link to="/movie_search">Movie_search</Link>
            </li>
            <li>
                <Link to="/movie_book">Movie_book</Link>
            </li>
        </ul>
    </div>)
}

export default Header;