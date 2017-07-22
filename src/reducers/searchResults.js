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
      console.debug('action success')
      return {
        ...state,
        searchMovies: {
          movies: action.payload.data.local_movies,
          error: null,
          loading: false
        }
      };
    default:
      console.debug('default state')
      console.debug(state)
      return state
  }
}
