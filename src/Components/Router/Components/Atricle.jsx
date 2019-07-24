import React from 'react';
import PropTypes from 'prop-types';

const Atricle = ({ title, imageUrl, author, category, body, handleGoBack }) => {
  // console.log('title =', title);
  return (
    <article>
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} />
      <p>
        <b>Author: {author}</b>
      </p>
      <p>
        <b>Category: {category}</b>
      </p>
      <p>{body}</p>
      <button type="button" onClick={handleGoBack}>
        Back to articles
      </button>
    </article>
  );
};

Atricle.propTypes = {};

export default Atricle;
