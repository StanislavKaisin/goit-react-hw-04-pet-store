import React from 'react';

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

Loader.defaultProps = {
  timeOut: 3000,
  pastDelay: 300,
};

export default Loader;
