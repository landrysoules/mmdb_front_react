import { THEATER_AIRING } from '../constants/action-types';
const INITIAL_STATE = {
  movies: {
    results: [],
    error: null,
    loading: false
  }
};

const dummyFunc = state => {
  console.debug('STATE:', state);
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `${THEATER_AIRING}`:
      return {
        ...state,
        movies: {
          results: [...state.movies.results],
          error: null,
          loading: true
        }
      };
    case `${THEATER_AIRING}_SUCCESS`:
      dummyFunc(state);
      return {
        ...state,
        movies: {
          results: action.payload.data.results,
          error: null,
          loading: false
        }
      };
    case `${THEATER_AIRING}_FAIL`:
      return {
        ...state,
        movies: {
          results: [],
          error: action.error,
          loading: false
        }
      };

    default:
      return state;
  }
}
