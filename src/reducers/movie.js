import {MOVIE, MOVIE_SUCCESS, MOVIE_FAIL} from '../constants/action-types';
const INITIAL_STATE = {
  error: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case MOVIE:
      return {
        ...state,
        error: null
      };
    case MOVIE_SUCCESS:
      return {
        ...state,
        [action.payload.data.id]: action.payload.data,
        error: null
      };
    case MOVIE_FAIL:
      return {
        ...state,
          error: action.error
      };

    default:
      return state;
  }
}
