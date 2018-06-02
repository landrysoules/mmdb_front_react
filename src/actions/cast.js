import {CAST} from '../constants/action-types';

export function cast(movieId) {
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

export function getCast(movieId) {
  return (dispatch, getState) => {
    const kast = getState().cast[movieId];
    if (!kast) {
      dispatch(cast(movieId));
    }
  }
}
