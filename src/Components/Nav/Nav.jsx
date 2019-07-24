import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Nav.module.css';

const activeStyle = {
  color: 'palevioletred',
};

const Nav = () => {
  return (
    <ul className={styles.navigation}>
      <li>
        <NavLink to="/" exact activeStyle={activeStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/pets" activeStyle={activeStyle}>
          Pets
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeStyle={activeStyle}>
          About
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
