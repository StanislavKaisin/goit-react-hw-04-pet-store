import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({
  onDeposit,
  onWithdraw,
  onInputChange,
  inputValue,
  isWithdrawEnable,
}) => {
  return (
    <section className={styles.controls}>
      <input
        type="number"
        onChange={onInputChange}
        value={inputValue}
        className={styles.input}
        placeholder="Введите сумму"
        min="0"
        step="0.01"
        required
      />
      <div className="">
        <button onClick={onDeposit} type="button" className={styles.button}>
          Deposit
        </button>
        <button
          onClick={onWithdraw}
          type="button"
          disabled={!isWithdrawEnable}
          className={isWithdrawEnable ? styles.button : styles.buttonDisabled}
        >
          Withdraw
        </button>
      </div>
    </section>
  );
};

Controls.propTypes = {
  onDeposit: PropTypes.func.isRequired,
  onWithdraw: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  isWithdrawEnable: PropTypes.bool.isRequired,
};

export default Controls;
