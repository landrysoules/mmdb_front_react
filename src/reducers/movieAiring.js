import { MOVIE_AIRING, MOVIE_AIRING_SUCCESS, MOVIE_AIRING_FAIL } from '../constants/action-types';
const INITIAL_STATE = {

};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MOVIE_AIRING:
      return {
        ...state
      };
      case MOVIE_AIRING_SUCCESS:
      return {
        ...state,
        ids:action.payload.data.results.map(rec => {return rec.id})
      };
      case MOVIE_AIRING_FAIL:
      return {
        ...state,
        ids: {
          error: action.error
        }
      };

    default:
      return state;
  }
}
