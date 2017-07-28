import {SEARCH} from '../constants/action-types'
const INITIAL_STATE = {
  searchMovies: {
    movies: [],
    error: null,
    loading: false
  }
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {

    case `${SEARCH}_SUCCESS`:
      return {
        ...state,
        searchMovies: {
          movies: action.payload.data.local_movies,
          error: null,
          loading: false
        }
      }
    case `${SEARCH}_FAIL`:
      return {
        ...state,
        searchMovies: {
          movies: [],
          error: action.error,
          loading: false
        }
      }

    default:
      return state
  }
}
