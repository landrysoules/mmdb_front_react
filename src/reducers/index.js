import { combineReducers } from 'redux';
import searchResults from './searchResults';
import airingMovies from './airingMovies';
import airingSeries from './airingSeries';
import movie from './movie';
import cast from './cast';

// import visibilityFilter from './visibilityFilter'

const mmdbApp = combineReducers({
  searchResults,
  airingMovies,
  airingSeries,
  movie, cast
});

export default mmdbApp;
