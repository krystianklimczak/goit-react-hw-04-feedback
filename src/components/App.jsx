// 'React.Component'
import React, { Component } from 'react';

// components
import Section from './section/Section';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Statistics from './statistics/Statistics';
import Notification from './notification/Notification';

// css modules
import css from './App.module.css';

// initial values
const initialValues = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positiveFeedback: 0,
}

export default class App extends Component {
  // feedback answers start state
  state = {...initialValues};

  // method to increment stats
  handleIncrement = (ev) => {
    const { name } = ev.target;
    this.setState((state) => ({
        [name]: state[name] + 1
    }))
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }

  // method to count total feedback's
  countTotalFeedback = () => {
      this.setState((state) => ({
          total: state.good + state.neutral + state.bad,
      }));
  };

  // method to count percentage value of positive feedback
  countPositiveFeedbackPercentage = () => {
      this.setState(({good, total}) => ({
          positiveFeedback: `${(parseFloat((good / total) * 100).toFixed(0)) + '%'}`,
      }))
  }

  // render
  render() {
    // destructuring assignment
    const {good, neutral, bad, total, positiveFeedback} = this.state

    return (
      <div className={css.container}>
        
          <Section title={'Please leave feedback'}>
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.handleIncrement}
            />
          </Section>

          <Section title={'Statistics'}>
            { total === 0 ?
              <Notification message={'There is no feedback'}/>
              :
              <Statistics 
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positiveFeedback={positiveFeedback}
              /> 
            }
          </Section>
      </div>
    )
  }
}