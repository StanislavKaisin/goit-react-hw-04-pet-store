import React from 'react';
import PropTypes from 'prop-types';

import replaceImg from '../../Sources/pets.jpg';

const ReplaceImg = ({ name }) => {
  return (
    <img
      src={replaceImg}
      alt={`${name}`}
      title="The photo of this pet is not available now, but all our pets are very friendly )"
    />
  );
};

ReplaceImg.propTypes = {
  name: PropTypes.string,
};

ReplaceImg.defaultProps = {
  name: 'Very nice pet',
};
export default ReplaceImg;
