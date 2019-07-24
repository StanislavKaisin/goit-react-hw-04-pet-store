import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  color: 'red',
};

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" exact activeStyle={activeStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeStyle={activeStyle}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/articles" activeStyle={activeStyle}>
            Articles
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
