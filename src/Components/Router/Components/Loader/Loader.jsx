import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ error, timeOut, pastDelay, retry }) => {
  if (error) {
    return (
      <div>
        Error!
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }
  if (timeOut) {
    return (
      <div>
        Taking a long time...
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }
  if (pastDelay) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return null;
};

Loader.propTypes = {};

export default Loader;
