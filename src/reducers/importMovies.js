import {IMPORT} from '../constants/action-types'
const INITIAL_STATE = {
  importedMovie: {
    id: null,
    url: null,
    name: null,
    error: null,
    loading: false
  }
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {

    case `${IMPORT}_SUCCESS`:
      return {
        ...state,
        importedMovie: {
          id: action.payload.data.id,
          url: action.payload.data.url,
          name: action.payload.data.name,
          error: null,
          loading: false
        }
      }
    case `${IMPORT}_FAIL`:
      return {
        ...state,
        importedMovie: {
          id: null,
          url: null,
          name: null,
          error: action.error,
          loading: false
        }
      }

    default:
      return state
  }
}
