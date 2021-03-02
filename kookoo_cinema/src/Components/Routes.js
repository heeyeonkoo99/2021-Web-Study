import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Movie_lookup from "../Screens/Movie_lookup";
import Movie_search from "../Screens/Movie_search";
import Movie_book from "../Screens/Movie_book";
//App.js에 있던 Movie_book/search/lookup을 Components/Routes.js로 이동

export default()=>(
    <Router>
        <Header/>
        <Route path="/movie_lookup" exact={true} component={Movie_lookup}/>
        <Route path="/movie_search" exact={true} component={Movie_search}/>
        <Route path="/movie_book" exact={true} component={Movie_book}/>
        <Footer/>
    </Router>
)