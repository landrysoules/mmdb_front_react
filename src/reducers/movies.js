import { MOVIE, MOVIE_SUCCESS, MOVIE_FAIL } from '../constants/action-types';
import {movie} from '../models/schema';
import {normalize} from 'normalizr';
const INITIAL_STATE = {
  movies: {
    result: [],
    error: null
  }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MOVIE:
      return {
        ...state,
        result: [...state.movies.result],
        error:null
      };
    case MOVIE_SUCCESS:
      return {
        ...state,
        result: [...state.movies.result, normalize(action.payload.data, movie)],
        error:null
      };
    case MOVIE_FAIL:
      return {
        ...state,
        movies: [...state.movies],
          error: action.error
        };

    default:
      return state;
  }
}
