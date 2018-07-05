import React from 'react';
import './TheaterContent.css';
import { IMAGE_PATH, IMAGE_SMALL_PATH } from '../../../constants/paths';
import MovieSticker from './MovieSticker';

// FIXME: Simplify this as what's been done in TVHome
const TheaterContent = ({ airingMovies, movies, cast }) => {
	const movieList = (airingMovies) => {
		if (!airingMovies) {
			return null;
		}
		if (!movies) return null;
		if (!airingMovies.ids) {
			return null;
		}
		if (!movies[airingMovies.ids[2]]) {
			return null;
		}
		if (!movies[airingMovies.ids[1]]) {
			return null;
		}
		if (!movies[airingMovies.ids[0]]) {
			return null;
		}
		const airingMoovies = airingMovies.ids.map((id) => {
			return movies[id];
		});
		return (
			<div className="row">
				<div className="col-md-3" />
				<div className="row">
					<div className="col-md-12">
						<h2>In Theaters</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 no-space">
						<MovieSticker
							movie={airingMoovies[0]}
							imagePath={IMAGE_PATH}
							cast={cast[airingMoovies[0].id]}
							width="492px"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 no-space">
						<MovieSticker
							movie={airingMoovies[1]}
							imagePath={IMAGE_SMALL_PATH}
							cast={cast[airingMoovies[1].id]}
							width="246px"
						/>
						<MovieSticker
							movie={airingMoovies[2]}
							imagePath={IMAGE_SMALL_PATH}
							cast={cast[airingMoovies[2].id]}
							width="246px"
						/>
					</div>
				</div>
			</div>
		);
	};
	return movieList(airingMovies);
};

export default TheaterContent;
