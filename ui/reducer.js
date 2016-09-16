import types from './types';

const defaultState = {
  searchQuery: '',
  movieList: [],
  movieDetails: {}
};

export default function movies(state = defaultState, action) {
  switch (action.type){
  case types.SEARCH_QUERY_CHANGED:
    return {...state, searchQuery: action.searchQuery};
  case types.REQUEST_MOVIE_LIST: 
  // When the user enters in a new search query, need to get rid of the current movie details
    return {movieList: [], movieDetails: {}, searchQuery: action.searchQuery};
  case types.RESPONSE_MOVIE_LIST:
    return {...state, movieList: action.movieList};
  case types.REQUEST_MOVIE_DETAILS:
  // Can't just return to default state because then movie list buttons would go away
    return {...state, movieDetails: {}};
  case types.RESPONSE_MOVIE_DETAILS:
    return {...state, movieDetails: action.movieDetails};
  default:
    return state;
  }
}

