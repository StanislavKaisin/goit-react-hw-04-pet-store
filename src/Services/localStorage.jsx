/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
// check if local storage exists
import PropTypes from 'prop-types';

function localStorageAvailable(type = 'localStorage') {
  try {
    const storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
}
// write to local storage

export const write = objToLS => {
  if (localStorageAvailable()) {
    try {
      localStorage.setItem('bank-account', JSON.stringify(objToLS));
    } catch (error) {
      console.log('Error during writing from local storage');
      return null;
    }
  }
};

// read from local storage

export const read = () => {
  if (localStorageAvailable()) {
    try {
      const obFromLS = JSON.parse(localStorage.getItem('bank-account'));

      if (obFromLS !== null) {
        return obFromLS;
      }

      return null;
    } catch (error) {
      console.log('Local Storage is empty');
    }
  }
};
write.propTypes = {
  objToLS: PropTypes.object.isRequired,
};
