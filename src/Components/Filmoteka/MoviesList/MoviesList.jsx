import React from 'react';
import PropTypes from 'prop-types';

import MoviesListItem from '../MoviesListItem/MoviesListItem';

import styles from './BookListItem.module.css';

const MoviesList = ({ searchResults, onMovieClick }) => {
  // /console.log('searchResults=', searchResults);
  // console.log('onMovieClick=', onMovieClick);
  return (
    <div className={styles.grid}>
      {searchResults.length > 0 &&
        searchResults.map(movie => {
          // console.log('movie=', movie);
          return (
            <MoviesListItem
              key={movie.id}
              movie={movie}
              onMovieClick={onMovieClick}
            />
          );
        })}
    </div>
  );
};
MoviesList.propTypes = {
  searchResults: PropTypes.arrayOf(Object),
  onMovieClick: PropTypes.func.isRequired,
};
MoviesList.defaultProps = {
  searchResults: [],
};
export default MoviesList;
