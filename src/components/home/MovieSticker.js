import React from 'react';
import { Link } from 'react-router-dom';

const MovieSticker = ({ movie, imagePath }) => {
  return (
    <span className="TheaterContent">
      <Link to={`/movie/${movie.id}`}>
        <img
          alt={movie.title}
          src={`${imagePath}${
            movie.backdrop_path
          }`}
        />
      </Link>
      {/* <span className="description">
        {airingMovies.movies.results[index].title}
      </span>
      <span className="sticker-casting">
        {airingMovies.movies.results[index].casting.data.crew[0].name}
      </span> */}
    </span>
  );
};

export default MovieSticker;
