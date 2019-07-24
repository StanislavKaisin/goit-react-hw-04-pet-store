/* eslint-disable consistent-return */
import React, { Component } from 'react';
import uuidv4 from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import 'react-toastify/dist/ReactToastify.css';

import styles from './Dashboard.module.css';

import * as localStorage from '../../../Services/localStorage';

export default class Dashboard extends Component {
  state = {
    history: [],
    totalDeposit: 0,
    totalWithdraw: 0,
    balance: 0,
    inputValue: '',
    isWithdrawEnable: true,
  };

  componentDidMount() {
    const stateFromLS = localStorage.read();
    if (stateFromLS !== null) {
      return this.setState({ ...stateFromLS });
    }
  }

  createNewOperation = typeOfOperation => {
    const dateOfOperation = new Date().toLocaleString();
    return {
      id: uuidv4(),
      type: typeOfOperation,
      amount: this.state.inputValue,
      date: dateOfOperation,
    };
  };

  handleDeposit = () => {
    const { inputValue } = this.state;
    if (!inputValue) {
      toast('Введите сумму для проведения операции!', { autoClose: false });
      this.clearInput();
      return;
    }

    const operation = this.createNewOperation('Deposit');

    this.setState(
      prevState => {
        return {
          history: [operation, ...prevState.history],
          totalDeposit:
            Math.round((prevState.totalDeposit + inputValue) * 100) / 100,
          balance: Math.round((prevState.balance + inputValue) * 100) / 100,
        };
      },
      () => {
        localStorage.write(this.state);
      },
    );

    this.clearInput();
  };

  handleWithdraw = () => {
    const { inputValue, balance } = this.state;

    if (!inputValue) {
      toast('Введите сумму для проведения операции!', { autoClose: false });
      this.clearInput();
      return;
    }

    if (Math.abs(inputValue) > balance) {
      toast('На счету недостаточно средств для проведения операции!', {
        autoClose: false,
      });
      this.clearInput();
      return;
    }

    const operation = this.createNewOperation('Withdraw');

    this.setState(
      prevState => {
        return {
          history: [operation, ...prevState.history],
          totalWithdraw:
            Math.round((prevState.totalDeposit + inputValue) * 100) / 100,
          balance: Math.round((prevState.balance - inputValue) * 100) / 100,
        };
      },
      () => {
        localStorage.write(this.state);
      },
    );
    this.clearInput();
  };

  handleInputChange = e => {
    const { value } = e.target;

    if (value === '' || Number.isNaN(value)) {
      this.setState({
        inputValue: '',
      });
    }
    const { balance } = this.state;
    const roundedValue = Math.round(value * 100) / 100;
    const transformedValue = Math.abs(roundedValue);
    this.setState({
      inputValue:
        Number(transformedValue) === 0 ? '' : Number(transformedValue),
      isWithdrawEnable: !(transformedValue > balance),
    });
  };

  clearInput = () => {
    this.setState({
      inputValue: '',
      isWithdrawEnable: true,
    });
  };

  render() {
    const {
      inputValue,
      totalDeposit,
      totalWithdraw,
      balance,
      isWithdrawEnable,
      history,
    } = this.state;

    return (
      <div className={styles.dashboard}>
        <Controls
          onDeposit={this.handleDeposit}
          onWithdraw={this.handleWithdraw}
          onInputChange={this.handleInputChange}
          inputValue={inputValue}
          isWithdrawEnable={isWithdrawEnable}
        />
        <Balance
          balance={balance}
          deposit={totalDeposit}
          witdraw={totalWithdraw}
        />
        <TransactionHistory transactionHistory={history} />
        <ToastContainer />
      </div>
    );
  }
}
