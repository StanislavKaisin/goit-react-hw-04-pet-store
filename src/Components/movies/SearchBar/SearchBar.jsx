import React from 'react';
import PropTypes from 'prop-types';

import styles from './SearchBar.module.css';

const SearchBar = ({ onChange }) => {
  return (
    <input
      type="text"
      className={styles.input}
      onChange={onChange}
      placeholder="Input movie title"
    />
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
