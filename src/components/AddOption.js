import React from 'react';
import ReactDOM from 'react-dom';

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();
    const value = e.target.elements.AddOptionText.value.trim();

    const error = this.props.onHandleAddOption(value);
    this.setState(() => ({
      error
    }));

    if (!error) {
      e.target.elements.AddOptionText.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>Error: {this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='AddOptionText' />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
