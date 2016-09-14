import * as types from './types';

const defaultState = {
  movieList: [],
  movieDetails: {}
};

export default function movies(state = defaultState, action) {
  switch (action.type){
    // As soon as a the search button is clicked, remove the current movie list
    // because it take time for fetch to return an error if the url is not valid.
  case types.REQUEST_MOVIE_LIST: 
  // When the user enters in a new search query, need to get rid of the current movie details
    return defaultState;
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

