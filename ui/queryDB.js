const MOVIE_LIST = 'http://www.omdbapi.com/?s=';
const SPECIFIC_MOVIE_BEFORE = 'http://www.omdbapi.com/?i=';
const SPECIFIC_MOVIE_AFTER = '&plot=full&r=json';

export async function queryMovies(searchQuery) {
  try {
    const response = await fetch(MOVIE_LIST + searchQuery);
    const json = await response.json();
    return json.Search;
  } catch(error) {
    return [];
  }
}

export async function querySpecifiedMovie(movieID) {
  try {
    const response = await fetch(SPECIFIC_MOVIE_BEFORE + movieID + SPECIFIC_MOVIE_AFTER);
    const json = await response.json();
    return json;
  } catch (error) {
    return {};
  }
}