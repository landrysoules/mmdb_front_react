import { MOVIE_CREDITS } from '../constants/action-types';

export function movieCredits(movieId) {
  return {
    type: MOVIE_CREDITS,
    payload: {
      request: {
        url: `/movie/${movieId}/credits`,
        params: {
          api_key: process.env.REACT_APP_API_KEY
        }
      }
    }
  };
}
