import React from 'react';
import ReactDOM from 'react-dom';

import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

import { Router, Route, browserHistory } from 'react-router';
import Home from './home';
import MovieDetails from './movieDetails';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	reducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

window.React = React;

const setup = {};

setup.render = function render(App) {

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/search" component={App} />
      <Route path="/details" component={MovieDetails} />
    </Router>
  </Provider>,
  document.getElementById('root'));
};

export default setup;
