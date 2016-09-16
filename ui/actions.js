import types from './types.js';

export function searchQueryChanged(searchQuery) {
  return {
    type: types.SEARCH_QUERY_CHANGED,
    searchQuery
  };
}

export function requestMovieList(searchQuery) {
  return {
    type: types.REQUEST_MOVIE_LIST,
    searchQuery
  };
}

export function responseMovieList(movieList) {
  return {
    type: types.RESPONSE_MOVIE_LIST,
    movieList
  };
}

export function requestMovieDetails(movieID) {
  return {
    type: types.REQUEST_MOVIE_DETAILS,
    movieID
  };
}

export function responseMovieDetails(movieDetails) {
  return {
    type: types.RESPONSE_MOVIE_DETAILS,
    movieDetails
  };
}
