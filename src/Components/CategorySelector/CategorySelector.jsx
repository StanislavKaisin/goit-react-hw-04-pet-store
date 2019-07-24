import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const CategorySelector = ({ options, isClearable, value, onChange }) => {
  return (
    <div>
      <Select options={options} isClearable value={value} onChange={onChange} />
    </div>
  );
};

CategorySelector.propTypes = {};

export default CategorySelector;
