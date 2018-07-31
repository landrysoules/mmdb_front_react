import { MOVIE, MOVIE_AIRING, MOVIES_POPULAR } from '../constants/action-types';

export function movie(movieId) {
	return {
		type: MOVIE,
		payload: {
			request: {
				url: `/movie/${movieId}`,
				params: {
					api_key: process.env.REACT_APP_API_KEY
				}
			}
		}
	};
}

export function getPopularMovies() {
	return {
		type: MOVIES_POPULAR,
		payload: {
			request: {
				url: '/movie/popular',
				params: {
					api_key: process.env.REACT_APP_API_KEY
				}
			}
		}
	};
}

export function getAiringMovies() {
	return {
		type: MOVIE_AIRING,
		payload: {
			request: {
				url: `/movie/now_playing`,
				params: {
					api_key: process.env.REACT_APP_API_KEY
				}
			}
		}
	};
}

export function getMovie(movieId) {
	return (dispatch, getState) => {
		const moovie = getState().movie[movieId];
		if (!moovie) {
			dispatch(movie(movieId));
		}
	};
}
