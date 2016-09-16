import React from 'react';
import { Link } from 'react-router';
import './stylesheets/home.css';

export default class Home extends React.Component{
  render() {
    return(
      <div className="homeMain">
        <h1 className="introduction">Welcome to the OMDB app </h1>
        <div className="content">
          This website allowed us to become familiar with react, redux,
          redux-saga, and react-router. Our first goal was to take a 
          user's query and search for the movies that match the query.
          After acheiving our core functionality, we had to use redux
          so components don't need to maintain state. Then we used redux-saga
          to make asynchronous API calls to an omDB endpoint and returned the
          list of movies.  From that list, a user could click on one of them
          and it would display information about that movie.  After finishing
          this, we had to use react-router so we could transition between pages
          instead of having everything on one page.
        </div>
        <ul className="searchPageLink">
          <li>
            <Link to="/search">Click here to search for Movies</Link>
          </li>
        </ul>
      </div>
    );
  }
}