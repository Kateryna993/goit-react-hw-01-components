import React from 'react';
import PropTypes from 'prop-types';
import StatsElem from './Stats-Element';
import styles from './Stats.module.css';

function generateRandomColor() {
  let r = Math.round(Math.random() * 255); //red 0 to 255
  let g = Math.round(Math.random() * 255); //green 0 to 255
  let b = Math.round(Math.random() * 255); //blue 0 to 255
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={styles.item}
            key={id}
            style={{ backgroundColor: generateRandomColor() }}
          >
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
