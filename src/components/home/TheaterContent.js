import React from 'react';
import './TheaterContent.css';
import { IMAGE_PATH, IMAGE_SMALL_PATH } from '../../constants/paths';

const TheaterContent = ({ airingMovies }) => {
  console.debug('airingMovies', airingMovies);
  const movieList = airingMovies => {
    if (airingMovies.movies.results.length === 0) {
      return null;
    }
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h2>In Theaters</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <span className="TheaterContent">
              <img
                alt={airingMovies.movies.results[1].title}
                src={`${IMAGE_SMALL_PATH}${
                  airingMovies.movies.results[1].backdrop_path
                }`}
              />
              <span className="description">
                {airingMovies.movies.results[1].title}
              </span>
            </span>
            <span className="TheaterContent">
              <img
                alt={airingMovies.movies.results[2].title}
                src={`${IMAGE_SMALL_PATH}${
                  airingMovies.movies.results[2].backdrop_path
                }`}
              />
              <span className="description">
                {airingMovies.movies.results[2].title}
              </span>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="TheaterContent">
              <img
                alt={airingMovies.movies.results[0].title}
                src={`${IMAGE_PATH}${
                  airingMovies.movies.results[0].backdrop_path
                }`}
              />
              <span className="description">
                {airingMovies.movies.results[0].title}
              </span>
              {/* <ul>
            {airingMovies.movies.results[0].casting.data.cast.map(function(
              movie
            ) {
              return <li key={movie.id}>{movie.name}</li>;
            })}
          </ul> */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return movieList(airingMovies);
};

export default TheaterContent;
