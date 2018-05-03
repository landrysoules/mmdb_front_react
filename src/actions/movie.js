import { MOVIE } from '../constants/action-types';

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
