import PropTypes from 'prop-types';

const formatter = new Intl.NumberFormat('ua', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

formatter.PropTypes = {
  number: PropTypes.number.isRequired,
};

export default formatter;
