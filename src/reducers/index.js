import { combineReducers } from 'redux';
import searchResults from './searchResults';
import airingMovies from './airingMovies';
import airingSeries from './airingSeries';
import movieAiring from './movieAiring';
import movie from './movie';
import cast from './cast';

const mmdbApp = combineReducers({
  searchResults,
  airingMovies,
  airingSeries,
  movieAiring,
  movie,
    cast
});

export default mmdbApp;
