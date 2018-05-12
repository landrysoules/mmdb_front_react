import { SEARCH } from '../constants/action-types';

export function search(searchString) {
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
