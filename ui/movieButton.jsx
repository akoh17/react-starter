import React from 'react';
import './stylesheets/movieButton.css';

export default class MovieButton extends React.Component {
  render() {
    //console.log(movieID)
    var movieID =  this.props.movieID;
   // var movieTitle = this.props.movieTitle;
    return(
    // Need onClick={() => {this.props.onClick(movieID)}} instead of onClick ={this.props.onClick(movieID)} because the first way passes
    // the function into onClick, whereas the second way just calls onClick directly.
    <button type="button" className="movieBtn" onClick={ () => {this.props.onClick(movieID);} }> {this.props.movieTitle} </button>
    );
  }
}