import React from 'react';
import ReactDOM from 'react-dom';

import Modal  from 'react-modal';

class OptionModal extends React.Component {
  render() {
    return (
      <Modal isOpen={!!this.props.selectedOption} contentLabel="Selected Item">
        <div>
          <p>Selected Item: {this.props.selectedOption}</p>
          <button onClick={this.props.onCloseModal}>OK</button>
        </div>
      </Modal>
    );
  }
}

export default OptionModal;
