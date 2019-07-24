import React from 'react';

import Gallery from '../Components/Gallery/Gallery';
import pets from '../Sources/pets.json';

const PetsPage = () => {
  return (
    <div>
      <h2>Available pets</h2>
      <Gallery pets={pets} />
    </div>
  );
};

export default PetsPage;
