import { IMPORT } from '../constants/action-types';

export function importMovie(url) {
  return {
    type: IMPORT,
    payload: {
      request:{
        url:'/movies/import',
        params: {
          request: url
        }
      }
    }
  }
}
