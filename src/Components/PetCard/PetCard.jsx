import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import ReplaceImg from '../ReplaceImg/ReplaceImg';

import styles from './PetCard.module.css';

const imgRef = createRef();

export default class PetCard extends Component {
  state = {
    imgIsLoaded: true,
  };

  componentDidMount() {
    if (!imgRef.current.naturalWidth || !imgRef.current.naturalHeight) {
      this.setState({ imgIsLoaded: false });
    }
  }

  render() {
    const { imgIsLoaded } = this.state;
    const { pet } = this.props;
    const { image, name } = pet;
    return (
      <div className={styles.card}>
        <div className={styles.imgBlock}>
          {imgIsLoaded ? (
            <img src={image} alt={`${name}`} ref={imgRef} />
          ) : (
            <ReplaceImg name={name} />
          )}
        </div>
        <div className={styles.contentCard}>
          <h2>Name: {name}</h2>
        </div>
      </div>
    );
  }
}

PetCard.propTypes = {
  pet: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    age: PropTypes.number,
    color: PropTypes.string,
    gender: PropTypes.string,
    breed: PropTypes.string,
  }).isRequired,
};
