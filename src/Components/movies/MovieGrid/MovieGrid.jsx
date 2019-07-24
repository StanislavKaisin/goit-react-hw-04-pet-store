import React from 'react';
import PropTypes from 'prop-types';
import MovieGridItem from '../MovieGridItem/MovieGridItem';

import styles from './MovieGrid.module.css';

const MovieGrid = ({ movies }) => {
  return (
    movies.length > 0 && (
      <div className={styles.movieGrid}>
        {movies.map(movie => (
          <MovieGridItem key={movie.id} movie={movie} />
        ))}
      </div>
    )
  );
};

MovieGrid.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieGrid.defaultProps = {
  movies: [],
};

export default MovieGrid;
