import { combineReducers } from 'redux'
import searchResults from './searchResults'
import importMovies from './importMovies'

// import visibilityFilter from './visibilityFilter'

const mmdbApp = combineReducers({
  searchResults,
  importMovies
})

export default mmdbApp
