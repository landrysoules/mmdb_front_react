import {TV_AIRING, TV_AIRING_SUCCESS, TV_AIRING_FAIL} from '../constants/action-types';
const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TV_AIRING:
      return {
        ...state
      };
    case TV_AIRING_SUCCESS:
      return {
        ...state,
        ids: action
          .payload
          .data
          .results
          .map(rec => {
            return rec.id
          })
      };
    case TV_AIRING_FAIL:
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
