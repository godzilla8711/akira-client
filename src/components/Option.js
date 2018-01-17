import React from 'react';
import ReactDOM from 'react-dom';

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.item}
        <button onClick={(e) => {
          return this.props.onHandleDeleteOption(this.props.item)
        }}>
          Remove
        </button>
      </div>
    );
  }
}

export default Option;
