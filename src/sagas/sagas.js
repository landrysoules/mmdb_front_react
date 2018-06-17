import {put, takeEvery} from 'redux-saga/effects';
import {MOVIE_AIRING_SUCCESS, MOVIE_SUCCESS, TV_SUCCESS, TV_AIRING_SUCCESS} from '../constants/action-types';
import {getCast} from '../actions/cast';
import {getMovie} from '../actions/movie';
import {getTv} from '../actions/tv';

function * fetchCredits(data) {
  yield console.info('!!!SAGA!!!', data);
  yield put(getCast(data.payload.data.id));
}

export function * castSaga() {
  yield takeEvery(MOVIE_SUCCESS, fetchCredits)
  yield takeEvery(TV_SUCCESS, fetchCredits)
}

function * fetchMoviedata(data) {
  yield data
    .payload
    .data
    .results
    .slice(0, 3)
    .map(movie => {
      return put(getMovie(movie.id))
    });
}

function * fetchTVdata(data) {
  yield data
    .payload
    .data
    .results
    .slice(0, 3)
    .map(tv => {
      return put(getTv(tv.id))
    });
}

export function * movieSaga() {
  yield takeEvery(MOVIE_AIRING_SUCCESS, fetchMoviedata)

}

export function * tvSaga() {
  yield takeEvery(TV_AIRING_SUCCESS, fetchTVdata)

}
