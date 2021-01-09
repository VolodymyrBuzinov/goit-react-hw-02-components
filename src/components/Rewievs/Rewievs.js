import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Statistics from './Statistics/Statistics.jsx';
import FeedbackOptions from './Buttons/FeedbackOptions.jsx';
import Section from './Section/Section.jsx';
import Notification from './Notification/Notification.jsx';

export default class Rewievs extends Component {
  static defaultProps = {
    message: 'No feedback given',
  };

  static propTypes = {    
    message: PropTypes.string.isRequired,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0    
  }
   
  total = 0;
  positivePercentage = 0;
  notifications = false;
  
  onButtonsClick = name => {      
    this.setState(state => ({     
      [name]: state[name] + 1,
      notifications: true,
    }));     
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage(name);
  };

  countTotalFeedback = () => {
    this.setState(state => ({
      total: state.good + state.neutral + state.bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(state => ({
      positivePercentage: Math.round((state.good / state.total) * 100),
    }));
  };

  render() {
    return (<>
    <Section title='Please Leave Feedback'>         
          <FeedbackOptions
          type="button"
          onLeaveFeedback={this.onButtonsClick}
        />                                      
    </Section>
      <Section title='Statistics'>
        {this.state.notifications ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.positivePercentage}
          />
        ) : (
          <Notification message={this.props.message} />
        )}  
      </Section>
      </>
    )    
  }
}
