import React from 'react';
import PropTypes from 'prop-types';

import styles from './MovieGridItem.module.css';

const MovieGridItem = ({ movie: { overview, posterUrl, title } }) => {
  return (
    <div className={styles.movieCard}>
      <img src={posterUrl} alt={`${title} poster`} />
      <div className={styles.contentmovieCard}>
        <h2>{title}</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

MovieGridItem.propTypes = {
  movie: PropTypes.shape({
    overview: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieGridItem;
