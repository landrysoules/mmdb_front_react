import React from 'react';
import './TheaterContent.css';

const TheaterContent = ({ airingMovies }) => {
  console.debug('airingMovies', airingMovies);
  // FIXME: display the movies posters like in the real site
  const movieList = airingMovies => {
    return (
      <ul>
        {airingMovies.map(function(movie) {
          return <li key={movie.id}>{movie.title}</li>;
        })}
      </ul>
    );
  };
  return movieList(airingMovies);
};

export default TheaterContent;
