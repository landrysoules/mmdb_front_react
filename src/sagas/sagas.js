import {
  put,
  takeEvery,
  // all,
  // select,
  // takeLatest
  take,
  // call
} from 'redux-saga/effects';
import {
   MOVIE_SUCCESS, CAST_SUCCESS
} from '../constants/action-types';
import { getCast } from '../actions/cast';
// import { getMainAiringMovies } from '../selectors/index';
// import { movieCredits } from '../actions/movie_credits';

// function* helloSaga() {
//   console.log('Hello Sagas!');
// }

// function* loadAiringMovies() {
//   const allAiringMovies = yield take('THEATER_AIRING_SUCCESS');
//   const firstAiringMovies = yield select(getMainAiringMovies);
//   yield put({
//     type: 'FIRST_AIRING_MOVIES',
//     // payload: firstAiringMovies
//     payload: { firstAiringMovies: firstAiringMovies }
//   });
//   const firstAiringMovie = firstAiringMovies[0];
//   const firstCasting = yield take('CASTING_SUCCESS', firstAiringMovie.id);
// }

// function* loadAiring() {
//   yield takeEvery('THEATER_AIRING_SUCCESS', loadAiringMovies);
// }

// function* fetchAdditionalData() {
//   // query the state using the exported selector
//   const movies = yield select(getMainAiringMovies);
//   yield put(movieCredits(movies[0].id));
//   yield put(movieCredits(movies[1].id));
//   yield put(movieCredits(movies[2].id));
//   // ... call some API endpoint then dispatch a success/error action
// }

function* fetchCredits(data){
 yield console.info('!!!SAGA!!!', data);
 yield put(getCast(data.payload.data.id));
 const cast = yield take(CAST_SUCCESS);
  console.debug('SAGA - cast[0]', cast.payload.data.cast[0].name);
}

export function* castSaga() {
  // yield takeLatest(MOVIE_SUCCESS, data => {
    // console.error('SAGA', data);
  // });
  yield takeEvery(MOVIE_SUCCESS, fetchCredits)
  
}

