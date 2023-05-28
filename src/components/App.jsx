import React, { Component } from 'react';
import css from './Statistics/Statistics.module.css';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGetFeedback = value => {
    this.setState(prevState => ({ [value]: (prevState[value] += 1) }));
  };

  // clickGood = (value) => {
  //   this.setState((prevState) => ({ [value]: (prevState[value] += 1) }));
  // };

  // clickNeutral = () => {
  //   this.setState(prevState => ({ neutral: (prevState.neutral += 1) }));
  // };

  // clickBad = () => {
  //   this.setState(prevState => ({ bad: (prevState.bad += 1) }));
  // };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    if (totalFeedback === 0) {
      return 0;
    } else {
      return Math.round((good / totalFeedback) * 100);
    }
  };

  render() {
    const total = this.countTotalFeedback();
    const names = Object.keys(this.state);
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGetFeedback={this.onGetFeedback}
            names={names}
            // clickGood={this.clickGood}
            // clickNeutral={this.clickNeutral}
            // clickBad={this.clickBad}
          />
        </Section>

        <Section>
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positive={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
