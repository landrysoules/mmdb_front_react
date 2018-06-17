import {TV, TV_SUCCESS, TV_FAIL} from '../constants/action-types';
const INITIAL_STATE = {
  error: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TV:
      return {
        ...state,
        error: null
      };
    case TV_SUCCESS:
      return {
        ...state,
        [action.payload.data.id]: action.payload.data,
        error: null
      };
    case TV_FAIL:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
}
