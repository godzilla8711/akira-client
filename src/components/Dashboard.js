import React from 'react';
import ReactDOM from 'react-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.findAkira = this.findAkira.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      location: ''
    };
  }
  findAkira(e) {
    this.setState(() => ({
      location: 'Sleeping on the sofa'
    }));
  }
  handleClose() {
    this.setState(() => ({
      location: ''
    }));
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 center"><h5>Welcome to the Akira GPS Project!</h5></div>
        </div>
        <div className="row">
          <div className="col s12 center">
            <a className="waves-effect waves-light btn" onClick={this.findAkira} > Where is Akira ?</a >
          </div>
        </div>
        {this.state.location && (
          <div className="row">
            <div className="col s12 m4"></div>
            <div className="col s12 m4 center">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <h6>He's sleeping on the sofa</h6>
                  <br />
                  <button onClick={this.handleClose}>OK</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Dashboard;
