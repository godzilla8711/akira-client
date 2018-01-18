import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Dashboard from './Dashboard';

class AkiraApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
      </div>
    );
  }
}

export default AkiraApp;
