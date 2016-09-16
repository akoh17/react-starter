import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

import * as appActions from './actions';
import './stylesheets/movieDetails';

class MovieDetails extends React.Component{

  render() {
    // if we needed information from the url like the movieID, we would do this.props.params.movieID
    // but we just need this.props.movieDetails, because the movieDetails was already changed in app.jsx
    var movieDetails = this.props.movieDetails;
    if (Object.getOwnPropertyNames(movieDetails).length == 0) {
      return <div> Loading Movie Details... </div>;
    }

    var info = (
      <div className="movieDetailsMain">
        <div className="movieImage">
          <img src={movieDetails.Poster} alt="Moive Poster" className="posterDisplay" />
        </div>
        <div className="movieContent">
          <div className="movieSpec">
            <span className="specLabel">Title:</span> {movieDetails.Title}
          </div>
          <div className="movieSpec">
            <span className="specLabel">Year:</span> {movieDetails.Year}
          </div>
          <div className="movieSpec">
            <span className="specLabel">Rated: </span>{movieDetails.Rated}
          </div>
          <div className="movieSpec">
            <span className="specLabel">Released: </span>{movieDetails.Released}
          </div>
          <div className="movieSpec">
            <span className="specLabel">Actors: </span>{movieDetails.Actors}
          </div>
          <div className="movieSpec">
            <span className="specLabel">Runtime: </span>{movieDetails.Runtime}
          </div>
           <div className="movieSpec">
            <span className="specLabel">Country: </span>{movieDetails.Country}
          </div>
           <div className="movieSpec">
            <span className="specLabel">imdb rating: </span>{movieDetails.imdbRating}
          </div>
        </div>
        <div>
          <button type="button" className="backButton" onClick={ () => {browserHistory.goBack();} }> X </button>
        </div>
      </div>
    );
    return (info);
  }
}

function mapStateTopProps(state) {
  return {
    movieDetails: state.movieDetails
  };
}

function mapActionCreatorstoProps(dispatch) {
  return bindActionCreators(appActions, dispatch);
}

export default connect(mapStateTopProps,mapActionCreatorstoProps)(MovieDetails);