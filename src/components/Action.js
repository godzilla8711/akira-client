import React from 'react';
import ReactDOM from 'react-dom';

class Action extends React.Component {
  render() {
    return (
      <div>
        <button disabled={this.props.disabled} onClick={this.props.onHandlePickOne}>What should I do?</button>
      </div>
    );
  }
}

export default Action;
