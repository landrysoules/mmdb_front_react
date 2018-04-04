import { put, takeEvery, all, select, takeLatest } from 'redux-saga/effects';
import { THEATER_AIRING, MOVIE_CREDITS } from '../constants/action-types';
import { getMainAiringMovies } from '../selectors/index';
import { movieCredits } from '../actions/movie_credits';

function* helloSaga() {
  console.log('Hello Sagas!');
}

function* watchAiring() {
  yield takeEvery('THEATER_AIRING_SUCCESS', fetchAdditionalData);
}

function* fetchAdditionalData() {
  // query the state using the exported selector
  const movies = yield select(getMainAiringMovies);
  yield put(movieCredits(movies[0].id));
  yield put(movieCredits(movies[1].id));
  yield put(movieCredits(movies[2].id));
  // ... call some API endpoint then dispatch a success/error action
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchAiring()
    // watchIncrementAsync()
  ]);
}
