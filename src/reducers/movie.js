import { MOVIE, MOVIE_SUCCESS, MOVIE_FAIL } from '../constants/action-types';
import {movie} from '../models/schema';
import {normalize} from 'normalizr';
const INITIAL_STATE = {

};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MOVIE:
      return {
        ...state,

      };
    case MOVIE_SUCCESS:
      return {
        ...state,
        [action.payload.data.id]: normalize(action.payload.data, movie).entities.movies[action.payload.data.id]
      };
    case MOVIE_FAIL:
      return {
        ...state,
        [action.payload.data.id]: {
          error: action.error
        }
      };

    default:
      return state;
  }
}
