import PropTypes from 'prop-types';

const specifyBook = searchResults => {
  return searchResults.map(book => {
    return {
      id: book.id,
      image: book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.thumbnail
        : null,
      title: book.volumeInfo.title,
      description: book.volumeInfo.description,
      author: book.volumeInfo.authors,
      publisher: book.volumeInfo.publisher,
      publishedDate: book.volumeInfo.publishedDate,
      pageCount: book.volumeInfo.pageCount,
      rating: book.volumeInfo.ratingsCount,
    };
  });
};

specifyBook.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      volumeInfo: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        author: PropTypes.arrayOf(PropTypes.string),
        publisher: PropTypes.string,
        publishedDate: PropTypes.string,
        pageCount: PropTypes.number,
        rating: PropTypes.number,
      }),
    }),
  ),
};

export default specifyBook;
