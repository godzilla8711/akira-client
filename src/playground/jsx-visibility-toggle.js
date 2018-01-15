const React = require('react');
const ReactDOM = require('react-dom');

class Header extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

class VisibilityToggle extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClickFuncton}>{this.props.isVisible ? 'Hide Details' : 'Show Details'}</button>
        {
          this.props.isVisible && (<p>This is the detailed message.</p>)
        }
      </div>
    );
  }
}

class VisibilityApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    this.state = {
      title: 'Visibility Toggle App',
      isVisible: false
    };
  }

  handleVisibilityChange() {
    this.setState(prevState => {
      return ({
        isVisible: !prevState.isVisible
      });
    });
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <VisibilityToggle isVisible={this.state.isVisible} onClickFuncton={this.handleVisibilityChange} />
      </div>
    );
  }
}

ReactDOM.render(<VisibilityApp />, document.getElementById('app'));
