import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PetDescription from '../Components/PetDescription/PetDescription';

import pets from '../Sources/pets.json';

import styles from './Page.module.css';

const getPetById = id => pets.find(pet => pet.id === id);

class OnePetPage extends Component {
  state = {};

  render() {
    const { match } = this.props;
    const { params } = match;
    const { petId } = params;

    const currentPet = getPetById(petId);
    return (
      <div className={styles.container}>
        <div>
          <Link to="/pets">&lArr;Return</Link>
        </div>

        {currentPet ? (
          <PetDescription pet={{ ...currentPet }} />
        ) : (
          <h2>Pet not found!</h2>
        )}
      </div>
    );
  }
}
export default withRouter(OnePetPage);

OnePetPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      petId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
