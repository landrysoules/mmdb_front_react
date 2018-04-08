import { combineReducers } from 'redux';
import searchResults from './searchResults';
import airingMovies from './airingMovies';
import airingSeries from './airingSeries';

// import visibilityFilter from './visibilityFilter'

const mmdbApp = combineReducers({
  searchResults,
  airingMovies,
  airingSeries
});

export default mmdbApp;
