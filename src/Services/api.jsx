import axios from 'axios';
import PropTypes from 'prop-types';

const PATH = 'https://www.googleapis.com/books/v1/volumes?q=';

export const get = (keyWord, selectedCategory) => {
  const query = `${PATH}${keyWord}+subject:${selectedCategory}`;
  return axios.get(query).then(({ data }) => {
    return data;
  });
};

get.propTypes = {
  keyWord: PropTypes.string,
  selectedCategory: PropTypes.string,
};
export default get;
