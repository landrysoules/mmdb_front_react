import React from 'react';
import './TheaterContent.css';
import { IMAGE_PATH, IMAGE_SMALL_PATH } from '../../constants/paths';
import MovieSticker from './MovieSticker';

const TheaterContent = ({ airingMovies, movies }) => {
  console.debug('airingMovies', airingMovies);
  const movieList = airingMovies => {
    if (!airingMovies) {
      return null;
    }
    if (!airingMovies.ids) {
      return null;
    }
    if(!movies[airingMovies.ids[2]]){
      return null;
    }
    const airingMoovies = airingMovies.ids.map(id => {return movies[id]})
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
              movie={airingMoovies[1]}
              imagePath={IMAGE_SMALL_PATH}
            />
            <MovieSticker
              movie={airingMoovies[2]}
              imagePath={IMAGE_SMALL_PATH}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <MovieSticker
              movie={airingMoovies[0]}
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
