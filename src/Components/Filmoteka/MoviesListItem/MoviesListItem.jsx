/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './BookListItem.module.css';

const MoviesListItem = ({
  movie: { image, title, year, type, id },
  onMovieClick,
}) => {
  // console.log('image=', image);
  // console.log('onMovieClick=', onMovieClick);
  return (
    <div className={styles.bookCard}>
      <div className={styles.imgBlock}>
        <img src={image} alt={`${title} poster`} />
      </div>
      <div className={styles.contentBookCard}>
        <h2>Title: {title}</h2>
        {year && (
          <p>
            <b>Year: </b>
            {year}
          </p>
        )}
        {type && (
          <p>
            <b>Type:</b> {type}
          </p>
        )}
      </div>
      <button type="button" id={id} onClick={onMovieClick}>
        Show movie info
      </button>
    </div>
  );
};

MoviesListItem.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

export default MoviesListItem;
