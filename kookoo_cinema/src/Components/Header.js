import React from 'react';
import {Link} from "react-router-dom";
import {Positioner,WhiteBackground,HeaderContents,Spacer,GradientBorder} from "./HeaderStyled";

const Header=()=>{
    return(
    <Positioner>
    <WhiteBackground>
    <HeaderContents>
                <Link to="/movie_lookup">Movie_lookup</Link>
                </HeaderContents>
                <HeaderContents>
                <Link to="/movie_search">Movie_search</Link>
                </HeaderContents>
                <HeaderContents>
                <Link to="/movie_book">Movie_book</Link>
                </HeaderContents>
                <Spacer/>
    </WhiteBackground>
    <GradientBorder/>
    </Positioner>)
}

export default Header;