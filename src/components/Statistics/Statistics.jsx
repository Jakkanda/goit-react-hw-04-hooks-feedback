import React, { Component } from 'react';
import styled from './Statistics.module.css';

export class Statistics extends Component {
  render() {
    return (
      <ul className={styled.list}>
        <li className={styled.item}>Good: {this.props.good}</li>
        <li className={styled.item}>Neutral: {this.props.neutral}</li>
        <li className={styled.item}>Bad: {this.props.bad}</li>
        <li className={styled.item}>Total: {this.props.countTotalFeedback}</li>
        <li className={styled.item}>
          Positive feedback: {this.props.countPositiveFeedbackPercentage} %
        </li>
      </ul>
    );
  }
}
