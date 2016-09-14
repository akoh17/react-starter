import React from 'react';
import ReactDOM from 'react-dom';

import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

window.React = React;

const setup = {};

setup.render = function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>, 
    document.getElementById('root'));
};

export default setup;
