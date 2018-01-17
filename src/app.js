import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// const test = {
//   name: 'Tom',
//   getDetails() {
//     console.log(`My name is ${this.name}`);
//   }
// }

// const getDetailFunc = test.getDetails.bind(test);
// console.log(getDetailFunc());
// console.log(test.getDetails());
