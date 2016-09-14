import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as appActions from './actions';
import MovieButton from './movieButton';


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
      });
      return movies;
    } 
  }

  handleMovieBtnClick = (movieID) => {
    this.props.requestMovieDetails(movieID);
  }

  renderSpecificMovieDetails = () => {
    var movieDetails = this.props.movieDetails;
    if (movieDetails == null) {
      return;
    }

    if (Object.getOwnPropertyNames(movieDetails).length !== 0) {
      console.log(movieDetails)
      var info = (
        <div ref="movieDetails">
          <div> Title: {movieDetails.Title} </div>
          <div> Year: {movieDetails.Year} </div>
          <div> Rating: {movieDetails.Rated} </div>
          <div> Released: {movieDetails.Released} </div>
          <div> Actors: {movieDetails.Actors} </div>
          <div> Runtime: {movieDetails.Runtime}</div>
        </div>
      );
      return info;
    }
  }

  render() {
    const { requestMovieList } = this.props;
    return ( 
      <div ref="searchArea">
        <label htmlFor="searchBar"> Search Titles: </label>
        <input ref="searchBar" type="text" />
        <button ref="searchBtn" onClick={() => requestMovieList(this.refs.searchBar.value)}> Find My Movies </button>
        <div> {this.renderMovieTable()} </div>
        <div> {this.renderSpecificMovieDetails()} </div>
      </div>
    );
  }
}

function mapStateTopProps(state) {
  return {
    movieList: state.movieList,
    movieDetails: state.movieDetails
  }
}

function mapActionCreatorstoProps(dispatch) {
  return bindActionCreators(appActions, dispatch);
}

export default connect(mapStateTopProps,mapActionCreatorstoProps)(App)


