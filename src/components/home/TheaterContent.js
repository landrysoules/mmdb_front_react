import React from 'react';
import './TheaterContent.css';
import { IMAGE_PATH, IMAGE_SMALL_PATH } from '../../constants/paths';
import MovieSticker from './MovieSticker';

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
            <MovieSticker
              airingMovies={airingMovies}
              index="1"
              imagePath={IMAGE_SMALL_PATH}
            />
            <MovieSticker
              airingMovies={airingMovies}
              index="2"
              imagePath={IMAGE_SMALL_PATH}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <MovieSticker
              airingMovies={airingMovies}
              index="0"
              imagePath={IMAGE_PATH}
            />
          </div>
        </div>
      </div>
    );
  };
  return movieList(airingMovies);
};

export default TheaterContent;
