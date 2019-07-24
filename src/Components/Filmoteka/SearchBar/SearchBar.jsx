import React from 'react';
import PropTypes from 'prop-types';

import styles from './SearchBar.module.css';

const SearchBar = ({ query, onChange, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className={styles.input}
          onChange={onChange}
          placeholder="Input movie title"
          value={query}
        />
        <button type="submit" className={styles.input}>
          Search
        </button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
