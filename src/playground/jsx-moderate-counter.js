const React = require('react');
const ReactDOM = require('react-dom');

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleSubtractOne = this.handleSubtractOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleAddOne() {
    console.log(this.props.count);
    console.log('Add One Clicked');
  }
  handleSubtractOne() {
    console.log(this.props.count);
    console.log('Subtract One Clicked');
  }
  handleReset() {
    console.log(this.props.count);
    console.log('Reset Clicked');
  }
  render() {
    return (
      <div>
        <h4>Count: {this.props.count}</h4>
        <div id='buttonBar'>
          <button onClick={this.handleAddOne}>Add One</button>
          <button onClick={this.handleSubtractOne}>Subtract One</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Counter count={0} />, document.getElementById('app'));

// const React = require('react');
// const ReactDOM = require('react-dom');

// let count = 0;
// let appData = {
//   counts: []
// };

// function addOne() {
//   count++;
//   appData.counts.push(count);
//   render();
// }

// function subtractOne() {
//   count--;
//   appData.counts.pop();
//   render();
// }

// function reset() {
//   count = 0;
//   appData.counts = [];
//   render();
// }

// function render() {
//   const template = (
//     <div>
//       <h2>Akira GPS Project</h2>
//       <p>Welcome to the Akira GPS Project!</p>
//       <h4>Count: {count}</h4>
//       {
//         appData.counts.map(itemCount => {
//           return (
//             <p key={itemCount}>Item #{itemCount}</p>
//           )
//         })
//       }
//       <div id='buttonBar'>
//         <button onClick={addOne}>Add One</button>
//         <button onClick={subtractOne}>Subtract One</button>
//         <button onClick={reset}>Reset</button>
//       </div>
//     </div>
//   );

//   ReactDOM.render(template, rootElement);
// }

// const rootElement = document.getElementById('app');
// render();

// require('./playground/es6-classes');
