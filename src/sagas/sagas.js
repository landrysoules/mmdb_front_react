import {
  put,
  takeEvery,
  // all,
  // select,
  // takeLatest
  take,
  // call
} from 'redux-saga/effects';
import { MOVIE_AIRING_SUCCESS,
   MOVIE_SUCCESS, CAST_SUCCESS
} from '../constants/action-types';
import { getCast } from '../actions/cast';
import { getMovie } from '../actions/movie';

function* fetchCredits(data){
 yield console.info('!!!SAGA!!!', data);
 yield put(getCast(data.payload.data.id));
 const cast = yield take(CAST_SUCCESS);
  console.debug('SAGA - cast[0]', cast.payload.data.cast[0].name);
}

export function* castSaga() {
  yield takeEvery(MOVIE_SUCCESS, fetchCredits)
  
}

function* fetchMoviedata(data){
  yield console.info('!!!SAGA - AIRING!!!', data);
  yield data.payload.data.results.slice(0,3).map(movie => {return put(getMovie( movie.id))});
}

export function* movieSaga() {
  yield takeEvery(MOVIE_AIRING_SUCCESS, fetchMoviedata)
  
}

