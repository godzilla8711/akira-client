import React from 'react';
import ReactDOM from 'react-dom';

import Option from './Option';

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onHandleReset}>Reset All</button>
        {this.props.items.length === 0 && <p>No Items Exist</p>}
        {
          this.props.items.map(item => {
            return (
              <Option key={item}
                item={item}
                onHandleDeleteOption={this.props.onHandleDeleteOption} />
            );
          })
        }
      </div>
    );
  }
}

export default Options;
