import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';

import IndecisionApp from './components/IndecisionApp';
import AkiraApp from './components/AkiraApp';

ReactDOM.render(<AkiraApp />, document.getElementById('app'));

// const test = {
//   name: 'Tom',
//   getDetails() {
//     console.log(`My name is ${this.name}`);
//   }
// }

// const getDetailFunc = test.getDetails.bind(test);
// console.log(getDetailFunc());
// console.log(test.getDetails());
