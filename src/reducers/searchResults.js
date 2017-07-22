import {SEARCH} from '../constants/action-types'
const INITIAL_STATE = {
  searchResults: {}
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {

    case `${SEARCH}_SUCCESS`:
      return {
        ...state,
        searchResults: {
          searchResults: action.payload,
          error: null,
          loading: false
        }
      };
    default:
      return state;
  }
}
