import {CAST, CAST_SUCCESS, CAST_FAIL} from '../constants/action-types';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CAST:
      return {
        ...state
      };
    case CAST_SUCCESS:
      return {
        ...state,
        [action.payload.data.id]: action.payload.data
      };
    case CAST_FAIL:
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

