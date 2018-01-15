const React = require('react');
const ReactDOM = require('react-dom');

let count = 0;
let appData = {
  counts: []
};

function addOne() {
  count++;
  appData.counts.push(count);
  render();
}

function subtractOne() {
  count--;
  appData.counts.pop();
  render();
}

function reset() {
  count = 0;
  appData.counts = [];
  render();
}

function render() {
  const template = (
    <div>
      <h2>Akira GPS Project</h2>
      <p>Welcome to the Akira GPS Project!</p>
      <h4>Count: {count}</h4>
      {
        appData.counts.map(itemCount => {
          return (
            <p key={itemCount}>Item #{itemCount}</p>
          )
        })
      }
      <div id='buttonBar'>
        <button onClick={addOne}>Add One</button>
        <button onClick={subtractOne}>Subtract One</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );

  ReactDOM.render(template, rootElement);
}

const rootElement = document.getElementById('app');
render();

require('./playground/es6-classes');
