import { CAST } from '../constants/action-types';

export function getCast(movieId) {
  return {
    type: CAST,
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
