//http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html
//http://jpsierens.com/react-es6-get-started/
//https://github.com/metabase/metabase/blob/master/frontend/src/metabase/query_builder/SearchBar.jsx
//http://mediatemple.net/blog/tips/loading-and-using-external-data-in-react/
//https://github.com/harinij/100DaysOfCode/tree/master/Day%205
import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import axios from 'axios'
export default class App extends React.Component {
	 constructor(props, context) {
        super(props, context);
        this.queryDB = this.queryDB.bind(this);
        this.state = {
        	userInput: '',
        	shouldLoadMovies: false
        }
    }

    queryDB() {
        var val = ReactDOM.findDOMNode(this.refs.textInput).value;
        //Can't just do this.state.userInput = val, because doesn't update state immediately.
        this.setState({
        	userInput: val
        }) 

        if (val != '') {
        	this.setState({
        		shouldLoadMovies: true
        	})
        }
    }

    render() {
        return (
        		<div id="searchArea">
        			<div id="topRow">
            		<label htmlFor="searchBar"> <b> Search titles: </b> </label>
            		<input className="SearchBar" type="text" ref="textInput" value={this.userInput} placeholder="Movie Name"/>
        			</div>
        			<button type="button" onClick={this.queryDB}> Find My Movies </button>
        			
        			{this.state.shouldLoadMovies ? <ResultTable id="results" dataForTable={this.state.userInput} /> : <div> Waiting for input </div>}
        		</div>
        );	
    }
}


class ResultTable extends React.Component {
	constructor(props, context) {

		super(props, context);
		this.componentDidMount = this.componentDidMount.bind(this)
		this.state = {
			movies: []
		}
	}

  componentDidMount() {
    var _this = this;
    this.serverRequest = 
      axios
        .get("http://www.omdbapi.com/?s="+this.props.dataForTable)
        .then(function(result) { 
          _this.setState({
          	// The identifier for the query result is "Search"
           	movies: result.data.Search
          });
        })
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

 //  shouldComponentUpdate(nextProps, nextState) {
 //  	return nextProps.dataForTable != this.props.dataForTable;
	// }

	render() {
			/*var baseMatch = "http://www.omdbapi.com/?s=";
			var data = this.props.data;

			var matchingMovies = baseMatch + data;
			var movies = this.state.movies;*/

			var rowsForTable = [];
			var returnedMovies = this.state.movies;
			if (returnedMovies != null) {
				

				returnedMovies.map(function(movie, i){
						rowsForTable.push(<MovieBtn imdbID={movie.imdbID} movieTitle={movie.Title} />)
				})
			} 
		return(
			<div>
				{rowsForTable.length > 0? <div>{rowsForTable}</div> : <div> No results found </div>}
			</div>

		)


	}

}

class MovieBtn extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.summarizeMovie = this.summarizeMovie.bind(this)
		this.state = {movieID: ''}

	}

	summarizeMovie() {
		this.setState({
			movieID: this.props.imdbID
		})
	}

	render() {


		return (
			<div>
				<button type="button" onClick={this.summarizeMovie}>
				{this.props.movieTitle}
				</button>
				{this.state.movieID != '' ? <MovieSummary movieID={this.state.movieID} /> : <div></div>}
			</div>
		)
	}
}

class MovieSummary extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.componentDidMount = this.componentDidMount.bind(this)
		this.state = {summary: []}
	}

	componentDidMount() {
		if (this.props.movieID != '') {
			var url = "http://www.omdbapi.com/?i=" + this.props.movieID+ "&plot=full&r=json"
    	var _this = this;
    	this.serverRequest = 
      axios
        .get(url)
        .then(function(result) {    
          _this.setState({
           	summary: result.data
          });
        })
		}

		
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }
  

	render() {
		var dataRows = [];
		var data = this.state.summary;
		console.log(data)



		return(
				<div>
					<div> {data.Title} </div>
					<div> {data.Year} </div>
					<div> {data.Rated} </div>
					<div> {data.Released} </div>
					<div> {data.Runtime} </div>
					<div> {data.Actors}< /div>
				</div>
		)
	}
 
}

