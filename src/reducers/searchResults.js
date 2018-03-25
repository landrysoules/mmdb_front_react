import { SEARCH } from '../constants/action-types';
const INITIAL_STATE = {
  multiSearch: {
    results: [],
    error: null,
    loading: false
  }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `${SEARCH}`:
      return {
        ...state,
        multiSearch: {
          results: [...state.multiSearch.results],
          error: null,
          loading: true
        }
      };
    case `${SEARCH}_SUCCESS`:
      return {
        ...state,
        multiSearch: {
          results: action.payload.data.results,
          error: null,
          loading: false
        }
      };
    case `${SEARCH}_FAIL`:
      return {
        ...state,
        multiSearch: {
          results: [],
          error: action.error,
          loading: false
        }
      };

    default:
      return state;
  }
}
