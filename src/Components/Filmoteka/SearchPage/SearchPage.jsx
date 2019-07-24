import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from '../SearchBar/SearchBar';
import MoviesList from '../MoviesList/MoviesList';

const SearchPage = ({
  query,
  onChange,
  onSubmit,
  searchResults,
  onMovieClick,
}) => {
  // console.log('searchResults=', searchResults);
  return (
    <div>
      <p>SearchPage</p>
      <SearchBar query={query} onChange={onChange} onSubmit={onSubmit} />
      <MoviesList searchResults={searchResults} onMovieClick={onMovieClick} />
    </div>
  );
};

SearchPage.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  searchResults: PropTypes.arrayOf(Object),
  onMovieClick: PropTypes.func.isRequired,
};

SearchPage.defaultProps = {
  searchResults: [],
};
export default SearchPage;
