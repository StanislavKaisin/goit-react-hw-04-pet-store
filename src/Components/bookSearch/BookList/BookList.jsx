import React from 'react';
import PropTypes from 'prop-types';

import BookListItem from '../BookListItem/BookListItem';

import styles from './BookListItem.module.css';

const BookList = ({ searchResults }) => {
  return (
    <div className={styles.grid}>
      {searchResults.length > 0
        ? searchResults.map(book => <BookListItem key={book.id} book={book} />)
        : null}
    </div>
  );
};
BookList.propTypes = {
  searchResults: PropTypes.arrayOf(Object),
};
BookList.defaultProps = {
  searchResults: [],
};
export default BookList;
