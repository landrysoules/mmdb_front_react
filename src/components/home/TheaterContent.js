import React from 'react';
import './TheaterContent.css';
import { IMAGE_PATH } from '../../constants/paths';

const TheaterContent = ({ airingMovies }) => {
  console.debug('airingMovies', airingMovies);
  // FIXME: display the movies posters like in the real site
  const movieList = airingMovies => {
    if (airingMovies.length === 0) {
      return null;
    }
    return (
      <div>
        <h2>In Theaters</h2>
        <div className="TheaterContent">
          <img src={`${IMAGE_PATH}${airingMovies[0].backdrop_path}`} />
          <span className="description">{airingMovies[0].title}</span>
          {/* <ul>
          {airingMovies.map(function(movie) {
            return <li key={movie.id}>{movie.title}</li>;
          })}
        </ul> */}
        </div>
      </div>
    );
  };
  return movieList(airingMovies);
};

export default TheaterContent;
