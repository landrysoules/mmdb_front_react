import { AIRING_SERIES } from '../constants/action-types';

export function airingSeries() {
  return {
    type: AIRING_SERIES,
    payload: {
      request: {
        url: '/tv/on_the_air',
        params: {
          api_key: process.env.REACT_APP_API_KEY
        }
      }
    }
  };
}
