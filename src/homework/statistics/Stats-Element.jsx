import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const StatsElem = ({ label, percentage }) => (
  <>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}%</span>
  </>
);

StatsElem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatsElem;
