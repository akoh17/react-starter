import React from 'react';
import ReactDOM from 'react-dom';

window.React = React;

const setup = {};

setup.render = function render(Component) {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

export default setup;
