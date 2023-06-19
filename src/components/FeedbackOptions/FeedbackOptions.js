import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onCount, options }) => {
  return (
    <div className={css.feedbackOptions}>
      {options.map(option => {
        return (
          <button
          key={option}
            type="button"
            onClick={onCount}
            name={option}
            className={css.feedbackBtn}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onCount: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
