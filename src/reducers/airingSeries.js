import { AIRING_SERIES } from '../constants/action-types';
const INITIAL_STATE = {
  series: {
    results: [],
    error: null,
    loading: false
  }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `${AIRING_SERIES}`:
      return {
        ...state,
        series: {
          results: [...state.series.results],
          error: null,
          loading: true
        }
      };
    case `${AIRING_SERIES}_SUCCESS`:
      return {
        ...state,
        series: {
          results: action.payload.data.results,
          error: null,
          loading: false
        }
      };
    case `${AIRING_SERIES}_FAIL`:
      return {
        ...state,
        series: {
          results: [],
          error: action.error,
          loading: false
        }
      };

    default:
      return state;
  }
}
