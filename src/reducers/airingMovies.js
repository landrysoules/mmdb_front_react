import { AIRING_MOVIES } from '../constants/action-types';
const INITIAL_STATE = {
  movies: {
    results: [],
    error: null,
    loading: false
  }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `${AIRING_MOVIES}`:
      return {
        ...state,
        movies: {
          results: action.payload.movies,
          error: null,
          loading: false
        }
      };

    default:
      return state;
  }
}
