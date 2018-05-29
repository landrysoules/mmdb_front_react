import { combineReducers } from 'redux';
import searchResults from './searchResults';
import airingMovies from './airingMovies';
import airingSeries from './airingSeries';
import movieAiring from './movieAiring';
import movie from './movie';
import movies from './movies';
import cast from './cast';

// import visibilityFilter from './visibilityFilter'

const mmdbApp = combineReducers({
  searchResults,
  airingMovies,
  airingSeries,
  movieAiring,
  movie, movies, cast
});

export default mmdbApp;
