//http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html
//http://jpsierens.com/react-es6-get-started/

import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
export default class App extends React.Component {
	 constructor(props, context) {
        super(props, context);
        this.queryDB = this.queryDB.bind(this);
        this.state = {userInput: 'Some Movie'}
    }

    queryDB() {
        var val = ReactDOM.findDOMNode(this.refs.textInput).value;
        if (val != '') {
        	this.state.userInput = val;
        }
        alert(this.state.userInput);
        
    }

    render() {
        return (
        		<div id="searchArea">
        			<div id="topRow">
            		<label htmlFor="searchBar"> <b> Search titles: </b> </label>
            		<input className="SearchBar" type="text" ref="textInput" value={this.userInput} placeholder="Movie Name"/>
        			</div>
        			<button type="button" onClick={this.queryDB}> Find My Movies </button>
        		</div>
        );	
    }
}
