import React from 'react';
export default class MovieButton extends React.Component {
  render() {
    var movieID = this.props.movieID;
    return(
    // Need onClick={() => {this.props.onClick(movieID)}} instead of onClick ={this.props.onClick(movieID)} because the first way passes
    // the function into onClick, whereas the second way just calls onClick directly.
    <button type="button" className="movieBtn" onClick={ () => {this.props.onClick(movieID);} }> {this.props.movieTitle} </button>
    );
  }
}