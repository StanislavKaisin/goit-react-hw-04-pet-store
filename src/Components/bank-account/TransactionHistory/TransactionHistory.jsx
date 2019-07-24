import React from 'react';
import PropTypes from 'prop-types';
import './TransactionHistory.css';

import formatter from '../formatter';

const TransactionHistory = ({ transactionHistory }) => {
  return transactionHistory.length > 0 ? (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Transaction</th>

          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {transactionHistory.map(operation => (
          <tr key={operation.id}>
            <td>{operation.type}</td>
            <td>{formatter.format(operation.amount)}</td>
            <td>{operation.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : null;
};

TransactionHistory.propTypes = {
  transactionHistory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }),
  ),
};
TransactionHistory.defaultProps = {
  transactionHistory: [],
};

export default TransactionHistory;
