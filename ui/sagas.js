import { queryMovies, querySpecifiedMovie } from './queryDB';
import { put, take, fork } from 'redux-saga/effects';  

export function* getMovieList(searchQuery) {
  var movieList = yield queryMovies(searchQuery);
  yield put({type: 'RESPONSE_MOVIE_LIST', movieList});
}

export function* watchGetMovieList() {
  while(true) {
    const { searchQuery } = yield take('REQUEST_MOVIE_LIST');
    yield fork(getMovieList, searchQuery);
  }
}

export function* getSpecifiedMovie(movieID) {
  var movieDetails = yield querySpecifiedMovie(movieID);
  yield put({type: 'RESPONSE_MOVIE_DETAILS', movieDetails});
}

export function* watchGetSpecifiedMovie() {
  while(true) {
    const { movieID } = yield take ('REQUEST_MOVIE_DETAILS');
    yield fork(getSpecifiedMovie, movieID);
  }
}

export default function* rootSaga() {
  yield [
    fork(watchGetMovieList),
    fork(watchGetSpecifiedMovie)
  ];
}