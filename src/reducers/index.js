import { combineReducers } from 'redux';
import searchResults from './searchResults';
import airingMovies from './airingMovies';

// import visibilityFilter from './visibilityFilter'

const mmdbApp = combineReducers({
  searchResults,
  airingMovies
});

export default mmdbApp;
