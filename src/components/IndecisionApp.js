import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePickOne = this.handlePickOne.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.state = {
      items: [],
      selectedOption: undefined
    };
  }

  handleAddOption(item) {
    if (!item) {
      return 'You must specify a value';
    } else if (this.state.items.indexOf(item) > -1) {
      return 'The value must not already exist';
    }

    this.setState(prevState => ({
      items: prevState.items.concat(item)
    }));
  }

  handleDeleteOption(item) {
    this.setState(prevState => {
      return {
        items: prevState.items.filter(value => (value !== item))
      };
    });
  }

  handlePickOne() {
    const randomValue = Math.random() * this.state.items.length;
    const index = Math.floor(randomValue);
    this.setState(() => {
      return {
        selectedOption: this.state.items[index]
      };
    });
  }

  handleCloseModal() {
    console.log('In handleCloseModal()');
    this.setState(() => {
      return {
        selectedOption: undefined
      };
    });
  }

  handleReset() {
    this.setState(() => ({
      items: []
    }));
  }

  componentDidMount() {
    console.log('componentDidMount was called');
  }

  componentDidUpdate(prevState, newState) {
    console.log('componentDidUpdate was called');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount was called');
  }

  render() {
    const appData = {
      title: 'Akira GPS Project',
      subtitle: 'Welcome to the Akira GPS Project!'
    };

    return (
      <div>
        <Header title={appData.title}
          subtitle={appData.subtitle} />
        <Action onHandlePickOne={this.handlePickOne}
          disabled={this.state.items.length <= 0} />
        <Options items={this.state.items}
          onHandleReset={this.handleReset}
          onHandleDeleteOption={this.handleDeleteOption} />
        <AddOption onHandleAddOption={this.handleAddOption} />
        <OptionModal
          selectedOption={this.state.selectedOption}
          onCloseModal={this.handleCloseModal} />
      </div>
    );
  }
}

export default IndecisionApp;
