import { THEATER_AIRING } from '../constants/action-types';
import axios from 'axios';

// export function airingTheater() {
//   return {
//     type: THEATER_AIRING,
//     payload: {
//       request: {
//         url: '/movie/now_playing',
//         params: {
//           api_key: process.env.REACT_APP_API_KEY
//         }
//       }
//     }
//   };
// }

function getAllAiringMovies() {
  return axios.get(`${process.env.REACT_APP_API_ROOT}/movie/now_playing`, {
    params: { api_key: process.env.REACT_APP_API_KEY }
  });
  // .then(res => {
  //   let allMoviesPlaying = res.data;
  //   return {
  //     type: THEATER_AIRING,
  //     payload: {
  //       movies: allMoviesPlaying
  //     }
  //   };
  // });
}

function getCasting(airingMovies) {
  return axios.get(
    `${process.env.REACT_APP_API_ROOT}/movie/${
      airingMovies.data.results[0].id
    }/credits`,
    {
      params: { api_key: process.env.REACT_APP_API_KEY }
    }
  );
  // return axios.all(
  //   airingMovies.slice(0, 3).map(airingMovie => {
  //     return axios.get(
  //       `${process.env.REACT_APP_API_KEY}/movie/${airingMovie.id}/credits`,
  //       {
  //         params: { api_key: process.env.REACT_APP_API_KEY }
  //       }
  //     );
  //   })
  // );
}

function airing(moviz) {
  return {
    type: THEATER_AIRING,
    payload: {
      movies: moviz
    }
  };
}

export function airingTheater() {
  return dispatch => {
    getAllAiringMovies().then(movies => {
      getCasting(movies).then(airingMovies => {
        dispatch(
          airing(airingMovies.data.cast) //FIXME: we must dispatch a function, not return a state !!
        );
      });
    });
  };
}
// export function airingTheater() {
//   return dispatch => {
//     getAllAiringMovies()
//       .then(movies => {
//         getCasting(movies);
//       })
//       .then(airingMovies => {
//         dispatch({
//           type: THEATER_AIRING,
//           payload: {
//             movies: airingMovies
//           }
//         });
//       });
//   };
// }
