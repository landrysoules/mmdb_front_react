import { TV_AIRING } from '../constants/action-types';

export function airingTv() {
  return {
    type: TV_AIRING,
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
