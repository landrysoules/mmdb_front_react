import React from 'react';
import { Link } from 'react-router-dom';

const MovieSticker = ({ movie, imagePath, cast, cs }) => {
	const castElm = cast ? (
		<div className="sticker-cast">
			{cast.cast[0].name}, {cast.cast[1].name}
		</div>
	) : null;

	return (
		<Link to={`/movie/${movie.id}`}>
			<div
				className={cs}
				style={{
					backgroundImage: 'url(' + imagePath + movie.backdrop_path + ')'
				}}
			>
				<div className="description">{movie.title}</div>
				{castElm}
			</div>
		</Link>
	);
};

export default MovieSticker;
