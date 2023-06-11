import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, onCount, countPositiveFeedback }) => {
  return (
    
    <div className={css.statisticsContainer}>
        <h2 className={css}>Statistics</h2>
        <div className={css.statistics}><p >
        Good:<span className={css.option}>{good}</span>
      </p></div>
        <div className={css.statistics}><p>
        Neutral:<span className={css.option}>{neutral}</span>
      </p></div>
        <div className={css.statistics}><p>
        Bad:<span className={css.option}>{bad}</span>
      </p></div>
        <div className={css.statistics}><p>
        Total:<span className={css.option}>{onCount}</span>
      </p></div>
        <div className={css.statistics}><p>
        Positive feedback:<span className={css.option}>{countPositiveFeedback}%</span>
      </p></div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  onCount: PropTypes.number.isRequired,
  countPositiveFeedback: PropTypes.number.isRequired,
};
export default Statistics;
