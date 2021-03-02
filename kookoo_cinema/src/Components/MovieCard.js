import React from 'react';
import PropTypes from 'prop-types';
import '../Components/MovieCard.scss';
import Movie_Search from '../Screens/Movie_search';

const MovieCard=()=>{
    return (
        <div className="movie-card-container">
            <div className="movie-image"></div>
            <div className="movie-text">
            <h2>제목</h2>
            <div>년도</div>
            <div className="movie-summary-row">
                <h5>평점</h5>
            </div>
            <div className="movie-likes">/10</div>
        </div>
    </div>
    );
};

MovieCard.propTypes={
    //내가 이부분을 채워야겟다!
};

export default MovieCard;