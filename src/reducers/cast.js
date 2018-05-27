import { CAST } from '../constants/action-types';
const INITIAL_STATE = {
  cast: {
    result: [],
    error: null,
    loading: false
  }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `${CAST}`:
      return {
        ...state,
        cast: {
          result: [...state.cast.result],
          error: null,
          loading: true
        }
      };
    case `${CAST}_SUCCESS`:
      return {
        ...state,
        cast: {
          result: action.payload.data,
          error: null,
          loading: false
        }
      };
    case `${CAST}_FAIL`:
      return {
        ...state,
        cast: {
          result: [],
          error: action.error,
          loading: false
        }
      };

    default:
      return state;
  }
}
