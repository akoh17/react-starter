const MOVIE_LIST = 'http://www.omdbapi.com/?s=';
const SPECIFIC_MOVIE_BEFORE = 'http://www.omdbapi.com/?i=';
const SPECIFIC_MOVIE_AFTER = '&plot=full&r=json';

export function queryMovies(searchQuery) {
  return fetch(MOVIE_LIST + searchQuery)
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson.Search;
  })
  .catch(() => {
    return [];
  });
}

export function querySpecifiedMovie(movieID) {
  return fetch(SPECIFIC_MOVIE_BEFORE + movieID + SPECIFIC_MOVIE_AFTER)
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson;
  })
  .catch(() => {
    return {};
  });
}