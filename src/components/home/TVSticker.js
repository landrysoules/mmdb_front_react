import React from 'react';
import {Link} from 'react-router-dom';

const TVSticker = ({tv, imagePath, cast}) => {
  const castElm = cast
    ? <span className="sticker-casting">
        {cast.cast[0].name}, {cast.cast[1].name}
      </span>
    : null
  const linkElm = tv
    ? <Link to={`/tv/${tv.id}`}>
        <img alt={tv.title} src={`${imagePath}${tv.backdrop_path}`}/>
      </Link>
    : null
  return (
    <span className="TVContent">
      {linkElm}
      <span className="description">
        {tv.title}
      </span>
      {castElm}
    </span>
  );
};

export default TVSticker;
