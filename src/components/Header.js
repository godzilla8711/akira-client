import React from 'react';
import ReactDOM from 'react-dom';

const Header = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
    </div>
  );
}

export default Header;
