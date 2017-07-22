import { SEARCH } from 'constants/action-types';

export function search(searchString) {
  return {
    type: SEARCH,
    payload: {
      request:{
        url:'/movies/search',
        params: {
          request: searchString
        }
      }
    }
  }
}
