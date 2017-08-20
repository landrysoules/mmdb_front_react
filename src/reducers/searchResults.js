import {SEARCH} from '../constants/action-types'
const INITIAL_STATE = {
  searchMovies: {
    localMovies: [],
    imdbMovies: [],
    error: null,
    loading: false
  }
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `${SEARCH}`:
      return {
        ...state,
        searchMovies: {
          localMovies: [...state.searchMovies.localMovies],
          imdbMovies: [...state.searchMovies.imdbMovies],
          error: null,
          loading: true
        }
      }
    case `${SEARCH}_SUCCESS`:
      return {
        ...state,
        searchMovies: {
          localMovies: action.payload.data.local_movies,
          imdbMovies: action.payload.data.imdb_movies,
          error: null,
          loading: false
        }
      }
    case `${SEARCH}_FAIL`:
      return {
        ...state,
        searchMovies: {
          localMovies: [],
          imdbMovies: [],
          error: action.error,
          loading: false
        }
      }

    default:
      return state
  }
}
