import { AIRING } from '../constants/action-types';

export function airing(searchString) {
  //FIXME : split in 2 actions : airingtv and airing theater
  return {
    type: SEARCH,
    payload: {
      request: {
        url: '/search/multi',
        params: {
          query: searchString,
          api_key: process.env.REACT_APP_API_KEY
        }
      }
    }
  };
}
