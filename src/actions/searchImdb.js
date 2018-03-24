import { SEARCH_IMDB } from '../constants/action-types';

export function searchImdb(searchString) {
  return {
    type: SEARCH_IMDB,
    payload: {
      request:{
        url:'/movies/searchImdb',
        params: {
          title: searchString
        }
      }
    }
  }
}
