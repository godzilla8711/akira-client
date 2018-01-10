const React = require('react');
const ReactDOM = require('react-dom');

const template = (
  <div>
    <h2>Akira Project</h2>
    <p>Welcome to the Akira Project!</p>
  </div>
);

const rootElement = document.getElementById('app');
ReactDOM.render(template, rootElement);
