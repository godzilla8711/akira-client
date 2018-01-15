const React = require('react');
const ReactDOM = require('react-dom');

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePickOne = this.handlePickOne.bind(this);
    this.state = {
      items: []
    };
  }

  handleAddOption(item) {
    if (!item) {
      return 'You must specify a value';
    } else if (this.state.items.indexOf(item) > -1) {
      return 'The value must not already exist';
    }

    this.setState(prevState => {
      return {
        items: prevState.items.concat(item)
      };
    });
  }

  handlePickOne() {
    const randomValue = Math.random() * this.state.items.length;
    const index = Math.floor(randomValue);
    alert(`We picked: ${this.state.items[index]}`);
  }

  handleReset() {
    this.setState(() => {
      return {
        items: []
      };
    });
  }

  render() {
    const appData = {
      title: 'Akira GPS Project',
      subtitle: 'Welcome to the Akira GPS Project!'
    };

    return (
      <div>
        <Header title={appData.title} subtitle={appData.subtitle}/>
        <Action onHandlePickOne={this.handlePickOne} disabled={this.state.items.length <= 0} />
        <Options items={this.state.items} onHandleReset={this.handleReset} />
        <AddOption onHandleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
    </div>
  );
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button disabled={this.props.disabled} onClick={this.props.onHandlePickOne}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Options Component</p>
        <button onClick={this.props.onHandleReset}>Reset All</button>
        {
          this.props.items.map(item => {
            return <Option key={item} item={item}/>
          })
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.item}
      </div>
    );
  }
}

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
    this.setState(() => {
      return {
        error
      };
    });
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
