import React from 'react';
import PropTypes from 'prop-types';

const StatsElem = ({ label, percentage }) => (
  <>
    <span class="label">{label}</span>
    <span class="percentage">{percentage}%</span>
  </>
);

StatsElem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatsElem;
