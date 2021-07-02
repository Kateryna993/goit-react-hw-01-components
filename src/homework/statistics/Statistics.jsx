import React from 'react';
import PropTypes from 'prop-types';
import StatsElem from './Stats-Element';

const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <ul class="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li class="item" key={id}>
            <StatsElem label={label} percentage={percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
};

export default Statistics;
