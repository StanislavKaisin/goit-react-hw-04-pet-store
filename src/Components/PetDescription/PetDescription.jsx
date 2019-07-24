import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import ReplaceImg from '../ReplaceImg/ReplaceImg';

import styles from './PetDescription.module.css';

const imgRef = createRef();

export default class PetDescription extends Component {
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
    const { image, name, description, age, color, gender, breed } = pet;
    return (
      <div className={styles.container}>
        <h2 className={styles.imgBlock}>All about {name}</h2>
        <div className={styles.imgBlock}>
          {imgIsLoaded ? (
            <img src={image} alt={`${name}`} ref={imgRef} />
          ) : (
            <ReplaceImg name={name} />
          )}
          <div>
            <p>
              <span>Age:</span> {age}
            </p>
            <p>
              <span>Gender:</span> {gender}
            </p>
            <p>
              <span>Color:</span> {color}
            </p>
            <p>
              <span>Breed:</span> {breed}
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

PetDescription.propTypes = {
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
