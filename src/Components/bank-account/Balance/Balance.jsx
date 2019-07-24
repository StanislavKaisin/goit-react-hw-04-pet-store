/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './Balance.module.css';

import formatter from '../formatter';

const Balance = ({ balance, deposit, witdraw }) => {
  return (
    <section className={styles.balance}>
      <span>⬆️</span>
      <span>{formatter.format(deposit)}</span>
      <span>⬇️</span>
      <span>{formatter.format(witdraw)}</span>
      <span>Balance: {formatter.format(balance)}</span>
    </section>
  );
};

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  deposit: PropTypes.number.isRequired,
  witdraw: PropTypes.number.isRequired,
};

export default Balance;
