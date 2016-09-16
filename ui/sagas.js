import { queryMovies, querySpecifiedMovie } from './queryDB';
import { put, take, fork } from 'redux-saga/effects';  
import * as actions from './actions';
import types from './types';

export function* getMovieList(searchQuery) {
  var movieList = yield queryMovies(searchQuery);
  // yield put(actions.responseMovieList(movieList) invokes the response_list_action
  yield put(actions.responseMovieList(movieList));
}

export function* watchGetMovieList() {
  while(true) {
    // yield take(types.REQUEST_MOVIE_LIST) waits for the request_movie_list action to occur.
    // once it does, it returns Object {type: "REQUEST_MOVIE_LIST", searchQuery: currentStateOfSearchQuery}.
    // by doing {searchQuery}, we get the current state of the searchQuery item.
    const { searchQuery }  = yield take(types.REQUEST_MOVIE_LIST);
    yield fork(getMovieList, searchQuery);
  }
}

export function* getSpecifiedMovie(movieID) {
  var movieDetails = yield querySpecifiedMovie(movieID);
  yield put(actions.responseMovieDetails(movieDetails));
}

export function* watchGetSpecifiedMovie() {
  while(true) {
    const { movieID } = yield take(types.REQUEST_MOVIE_DETAILS);
    yield fork(getSpecifiedMovie, movieID);
  }
}

export default function* rootSaga() {
  yield [
    fork(watchGetMovieList),
    fork(watchGetSpecifiedMovie)
  ];
}