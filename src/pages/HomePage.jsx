import React from 'react';
import styles from './Page.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Welocome to Paws online store</h1>
      {/* <div>
        <img src={require('../Sources/pets.jpg')} alt="" />
      </div> */}
    </div>
  );
};

export default HomePage;
