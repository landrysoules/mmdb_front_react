import React from 'react';
import { Link } from 'react-router-dom';

const MovieSticker = ({ airingMovies, index, imagePath }) => {
  return (
    <span className="TheaterContent">
      <Link to={`/movie/${airingMovies.movies.results[index].id}`}>
        <img
          alt={airingMovies.movies.results[index].title}
          src={`${imagePath}${
            airingMovies.movies.results[index].backdrop_path
          }`}
        />
      </Link>
      <span className="description">
        {airingMovies.movies.results[index].title}
      </span>
    </span>
  );
};

export default MovieSticker;
