import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import PetCard from '../PetCard/PetCard';

import styles from './Gallery.module.css';

const Gallery = ({ pets, match }) => {
  return (
    <div>
      <ul className={styles.gallery}>
        {pets.length ? (
          pets.map(pet => (
            <Link
              key={pet.id}
              to={{
                pathname: `${match.path}/${pet.id}`,
                state: { ...pet },
              }}
              className={styles.galleryLink}
            >
              <PetCard pet={{ ...pet }} />
            </Link>
          ))
        ) : (
          <h2>No pets find</h2>
        )}
      </ul>
    </div>
  );
};

Gallery.propTypes = {
  pets: PropTypes.arrayOf(Object),
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

Gallery.defaultProps = {
  pets: [],
};

export default withRouter(Gallery);
