import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className="grey darken-3 nav-wrapper">
            <span style={{paddingLeft: 10}}><a href="#!" className="left brand-logo">Akira GPS Project</a></span>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="tbd.html">Login with Google</a></li>
              <li><a href="tbd.html">About</a></li>
              <li><a href="tbd.html">Help</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
