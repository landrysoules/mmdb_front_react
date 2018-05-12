import React from 'react';
import { Link } from 'react-router-dom';

//FIXME: background image has to be a background image!
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
      <span className="sticker-casting">
        {airingMovies.movies.results[index].casting.data.crew[0].name}
      </span>
    </span>
  );
};

export default MovieSticker;
