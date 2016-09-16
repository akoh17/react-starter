import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as appActions from './actions';
import MovieButton from './movieButton';
import MovieDetails from './movieDetails';

import { browserHistory } from 'react-router';

import './stylesheets/app.css';

class App extends React.Component {

  renderMovieTable = () => {
    var movieList = this.props.movieList;
    if (movieList == null) {
      return;
    }

    if (movieList.length > 0) {
      var movies = [];
      movieList.map((movie,i) => {
        movies.push(<MovieButton key={i} movieTitle={movie.Title} movieID={movie.imdbID} onClick={this.handleMovieBtnClick}/>);
        //movies.push(<MovieButton movieTitle={movie.Title} movieID={movie.imdbID} />);
      });
      return movies;
    } 
  }

  handleMovieBtnClick = (movieID) => {
    console.log(movieID)
    // set the state of the movieDetails object here, otherwise the movieDetails object will be empty 
    //when MovieDetails component tries to use the object.
    this.props.requestMovieDetails(movieID);
    browserHistory.push('/details')
    
  }

  // renderSpecificMovieDetails = () => {
  //   var movieDetails = this.props.movieDetails;
  //   if (movieDetails == null) {
  //     return;
  //   }

  //   if (Object.getOwnPropertyNames(movieDetails).length !== 0) {
  //     return <MovieDetails movieDetails={movieDetails} />
  //   }
  // }

  render() {
    const { searchQuery, searchQueryChanged, requestMovieList } = this.props;
    return (
      <div className="appMain"> 
        <div ref="searchArea" className="searchArea">
          <div>
            <label htmlFor="searchBar">Search: </label>
            <input id="searchBar" ref="searchBar" type="text" value={searchQuery} onChange={(e) => searchQueryChanged(e.target.value)} placeholder="Movie Title" />
          </div>
          <div>
            <button ref="searchBtn" onClick={() => requestMovieList(searchQuery)}> Find My Movies </button>
          </div>
        </div>
        <div className="movieListArea"> {this.renderMovieTable()} </div> 
      </div>
    );
  }
}

function mapStateTopProps(state) {
  return {
    searchQuery: state.searchQuery,
    movieList: state.movieList,
    //movieDetails: state.movieDetails
  }
}

function mapActionCreatorstoProps(dispatch) {
  return bindActionCreators(appActions, dispatch);
}

export default connect(mapStateTopProps,mapActionCreatorstoProps)(App)


