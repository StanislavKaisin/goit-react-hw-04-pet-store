import React from 'react';
import PropTypes from 'prop-types';

import styles from './SearchForm.module.css';

const SearchForm = ({
  onSubmit,
  value,
  onChange,
  categories,
  onCategoryChange,
  categoryForSearch,
}) => {
  return (
    <div>
      <form action="" onSubmit={onSubmit} className={styles.form}>
        <input
          type="text"
          name="query"
          placeholder="Input key word for search"
          value={value}
          onChange={onChange}
          className={styles.input}
        />
        <select
          value={categoryForSearch}
          onBlur={onCategoryChange}
          onChange={onCategoryChange}
          name="categoryForSearch"
          className={styles.select}
        >
          <option value="" disabled>
            Choose category for search
          </option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  categoryForSearch: PropTypes.string.isRequired,
};

export default SearchForm;
