import { THEATER_AIRING } from '../constants/action-types';

export function airingTheater() {
  return {
    type: THEATER_AIRING,
    payload: {
      request: {
        url: '/movie/now_playing',
        params: {
          api_key: process.env.REACT_APP_API_KEY
        }
      }
    }
  };
}
