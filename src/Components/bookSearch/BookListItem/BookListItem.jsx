import React from 'react';
import PropTypes from 'prop-types';

import styles from './BookListItem.module.css';

const BookListItem = ({
  book: {
    image,
    title,
    description,
    author,
    publisher,
    publishedDate,
    pageCount,
    rating,
  },
}) => {
  return (
    <div className={styles.bookCard}>
      <div className={styles.imgBlock}>
        <img src={image} alt={`${title} poster`} />
      </div>
      <div className={styles.contentBookCard}>
        <h2>Title: {title}</h2>
        {author && (
          <p>
            <b>Author: </b>
            {author}
          </p>
        )}
        {publishedDate && (
          <p>
            <b>Publisher:</b> {publisher}
          </p>
        )}
        {publishedDate && (
          <p>
            <b>Published Date: </b>
            {publishedDate}
          </p>
        )}
        {pageCount && (
          <p>
            <b>Pages: </b>
            {pageCount}
          </p>
        )}
        {rating && (
          <p>
            <b>Rating: </b>
            {rating}
          </p>
        )}
        {description && (
          <p className={styles.description}>
            <b>Description: </b>
            <br />
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

BookListItem.propTypes = {};

BookListItem.propTypes = {
  book: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.arrayOf(PropTypes.string),
    publisher: PropTypes.string,
    publishedDate: PropTypes.string,
    pageCount: PropTypes.number,
    rating: PropTypes.number,
  }).isRequired,
};

export default BookListItem;
