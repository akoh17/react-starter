import * as types from './types.js';

export function requestMovieList(searchQuery) {
  return {
    type: types.REQUEST_MOVIE_LIST,
    searchQuery
  };
}

export function requestMovieDetails(movieID) {
  return {
    type: types.REQUEST_MOVIE_DETAILS,
    movieID
  };
}
