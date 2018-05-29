import { MOVIE, MOVIE_SUCCESS, MOVIE_AIRING } from '../constants/action-types';

export function movie(movieId) {
  return {
    type: MOVIE,
    payload: {
      request: {
        url: `/movie/${movieId}`,
        params: {
          api_key: process.env.REACT_APP_API_KEY
        }
      }
    }
  };
}

// Used to trigger corresponding reducer, which will write movie in the state, without API fetching.
function setMovieAsCurrent(movie) {
  return {
    type: MOVIE_SUCCESS,
    payload: {
       movie
    }
  };
}

// export function getMovie(movieId) {
//   return (dispatch, getState) => {
//     const filteredMovies = getState().airingMovies.movies.results.filter(
//       movie => movie.id + '' === movieId
//     );
//     if (filteredMovies.length > 0) {
//       dispatch(setMovieAsCurrent(filteredMovies[0]));
//     } else {
//       dispatch(movie(movieId));
//     }
//   };
// }

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

export function getMovie(movieId){
  return (dispatch, getState) =>{
    const moovie = getState().movies[movieId];
    if(!moovie){
      dispatch(movie(movieId));
    }
  }

}
