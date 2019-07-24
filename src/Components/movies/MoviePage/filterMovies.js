import PropTypes from 'prop-types';

const filterMovies = (userSearch, moviesList) => {
  return moviesList.filter(movie =>
    movie.title.toLowerCase().includes(userSearch.toLowerCase()),
  );
};

filterMovies.PropTypes = {
  userSearch: PropTypes.string.isRequired,
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      overview: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default filterMovies;
