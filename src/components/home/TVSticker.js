import React from 'react';
import { Link } from 'react-router-dom';

const TVSticker = ({ tv, imagePath, cast, width }) => {
	// const castElm = cast.cast[0] ? (
	// 	<span className="sticker-casting">
	// 		{cast.cast[0].name}, {cast.cast[1].name}
	// 	</span>
	// ) : null;
	const linkElm = tv ? (
		<Link to={`/tv/${tv.id}`}>
			<img alt={tv.name} src={`${imagePath}${tv.backdrop_path}`} width={width} />
		</Link>
	) : null;
	return (
		<span className="TVContent">
			{linkElm}
			<span className="description-tv">{tv.name}</span>
			{/* {castElm} */}
		</span>
	);
};

export default TVSticker;
