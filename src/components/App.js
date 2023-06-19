import React from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import css from './App.module.css';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = e => {
    const feedbackOption = e.target.name;
    this.setState(prevState => ({
      [feedbackOption]: prevState[feedbackOption] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? Math.round((this.state.good * 100) / total) : 0;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const totalPositiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.feedback}>
        <Section title="Please leave your feedback">
        <FeedbackOptions
          onCount={this.countFeedback}
          options={Object.keys(this.state)}
        />
      </Section>
      <Section title="Statistics">
         {totalFeedback > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            onCount={totalFeedback}
            countPositiveFeedback={totalPositiveFeedback}
          />
        ) : (
          <p>There is no feedback</p>
        )}
      </Section>
      </div>
    )
  }
}

export default App;
