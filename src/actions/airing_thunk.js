import {AIRING_MOVIES, MOVIE_AIRING, MOVIE_AIRING_SUCCESS} from '../constants/action-types';
import axios from 'axios';
import { getMovie } from './movie';
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
    params: {
      api_key: process.env.REACT_APP_API_KEY
    }
  });
}

export function getCastingForMovie(movieId) {
  return axios.get(`${process.env.REACT_APP_API_ROOT}/movie/${movieId}/credits`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY
    }
  });
}

// export function processAiring() {
//   return function (dispatch, getState) {
//     dispatch(getAiringMovies());
//     const movieIds = getState().movieAiring.ids.slice(0,3);
//     movieIds.map(id => {
//       return(dispatch(getMovie(id)));
//     })
//   // return getAllAiringMovies().then(movies => {
//   //   const airingMovies = movies
//   //     .data
//   //     .results
//   //     .slice(0, 3);
//   //   return Promise.all(airingMovies.map(movie => {
//   //     return(dispatch( getMovie(movie.id)));
//   //   }));
//   // });
// }
// }

function processCasting(movie) {
  return new Promise(function (resolve, reject) {
    getCastingForMovie(movie.id).then(casting => {
      movie.casting = casting; //TODO: Ajouter selector pour recuperer les n premiers acteurs
      resolve(movie);
    });
  });
}

export function getAiringMovies() {
  return {
    type: MOVIE_AIRING,
    payload: {
      request: {
        url: `/movie/now_playing`,
        params: {
          api_key: process.env.REACT_APP_API_KEY
        }
      }
    }
  };
}

// export function getBestAiringMovies() {
//   // Invert control! Return a function that accepts `dispatch` so we can dispatch
//   // later. Thunk middleware knows how to turn thunk async actions into actions.

//   return function (dispatch) {
//     return processAiring().then(processed => {
//       dispatch(airingMovies(processed));
//     });
//   };
// }
