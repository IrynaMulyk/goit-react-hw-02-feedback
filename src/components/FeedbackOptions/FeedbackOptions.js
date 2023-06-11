import React  from "react";
import PropTypes from "prop-types";
import css from './FeedbackOptions.module.css';


const FeedbackOptions = ({onCount}) => 
    (<div className={css.feedbackOptions}>
    <button type="button" onClick={onCount} name='good' className={css.feedbackBtn}>Good</button>
    <button type="button" onClick={onCount} name='neutral' className={css.feedbackBtn}>Neutral</button>
    <button type="button" onClick={onCount} name='bad' className={css.feedbackBtn}>Bad</button>
</div>);

FeedbackOptions.propTypes = {
    onCount: PropTypes.func.isRequired,
  };

export default FeedbackOptions;

