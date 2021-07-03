import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import styles from './TransactionsHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead className={styles.header}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }, index) => (
        <tr
          key={id}
          style={{ backgroundColor: index % 2 ? '#cfd3ff' : '#fffef4' }}
        >
          <TransactionItem type={type} amount={amount} currency={currency} />
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default TransactionHistory;
