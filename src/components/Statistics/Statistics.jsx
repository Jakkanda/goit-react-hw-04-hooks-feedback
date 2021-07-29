import React from 'react';
import styled from './Statistics.module.css';

export function Statistics({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <ul className={styled.list}>
      <li className={styled.item}>Good: {good}</li>
      <li className={styled.item}>Neutral: {neutral}</li>
      <li className={styled.item}>Bad: {bad}</li>
      <li className={styled.item}>Total: {countTotalFeedback}</li>
      <li className={styled.item}>
        Positive feedback: {countPositiveFeedbackPercentage} %
      </li>
    </ul>
  );
}
