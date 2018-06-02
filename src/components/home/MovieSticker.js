import React from 'react';
import {Link} from 'react-router-dom';

const MovieSticker = ({movie, imagePath, cast}) => {
  const castElm = cast
    ? <span className="sticker-casting">
        {cast.cast[0].name}, {cast.cast[1].name}
      </span>
    : null
  const linkElm = movie
    ? <Link to={`/movie/${movie.id}`}>
        <img alt={movie.title} src={`${imagePath}${movie.backdrop_path}`}/>
      </Link>
    : null
  return (
    <span className="TheaterContent">
      {linkElm}
      <span className="description">
        {movie.title}
      </span>
      {castElm}
    </span>
  );
};

export default MovieSticker;
