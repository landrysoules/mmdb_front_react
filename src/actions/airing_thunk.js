import { AIRING_MOVIES } from '../constants/action-types';
import axios from 'axios';
// import { getMainAiringMovies } from '../selectors';

export function airingMovies(movies) {
  return {
    type: AIRING_MOVIES,
    payload: {
      movies: movies
    }
  };
}

function getAllAiringMovies() {
  return axios.get(`${process.env.REACT_APP_API_ROOT}/movie/now_playing`, {
    params: { api_key: process.env.REACT_APP_API_KEY }
  });
}

function getCastingForMovie(movieId) {
  return axios.get(
    `${process.env.REACT_APP_API_ROOT}/movie/${movieId}/credits`,
    {
      params: { api_key: process.env.REACT_APP_API_KEY }
    }
  );
}

function processAiring() {
  return getAllAiringMovies().then(movies => {
    // let airingMovies = getMainAiringMovies();
    let airingMovies = movies.data.results.slice(0, 3);
    return Promise.all(
      airingMovies.map(movie => {
        return processCasting(movie);
      })
    );
  });
}

function processCasting(movie) {
  return new Promise(function(resolve, reject) {
    getCastingForMovie(movie.id).then(casting => {
      movie.casting = casting; //TODO: Ajouter selector pour recupere les n premiers acteurs
      resolve(movie);
    });
  });
}

export function getBestAiringMovies() {
  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.

  return function(dispatch) {
    return processAiring().then(processed => {
      dispatch(airingMovies(processed));
    });
  };
}
