import React from 'react';
import { Link } from 'react-router-dom';

const TVSticker = ({ tv, imagePath, cast, cs }) => {
	return (
		<Link to={`/tv/${tv.id}`}>
			<div
				className={cs}
				style={{
					backgroundImage: 'url(' + imagePath + tv.backdrop_path + ')'
				}}
			>
				<div className="description">{tv.name}</div>
			</div>
		</Link>
	);
};

export default TVSticker;
