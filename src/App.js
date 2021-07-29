import { useState } from 'react';
import './App.css';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
import { Section } from './components/Section/Section';
import { Notification } from './components/Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerClick = e => {
    const chooseButton = e.target.textContent.toLowerCase();
    switch (chooseButton) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return [good, neutral, bad].reduce((sum, current) => {
      return sum + current;
    }, 0);
  };
  const countPositiveFeedbackPercentage = () => {
    return ((good / countTotalFeedback()) * 100).toFixed(0);
  };
  const totalFeedback = countTotalFeedback();
  const positiveFeedbackPersentage = countPositiveFeedbackPercentage();

  const startToRender = good !== 0 || neutral !== 0 || bad !== 0;
  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedBack={handlerClick}
        />
      </Section>

      <Section title="Statistics">
        {startToRender ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={totalFeedback}
            countPositiveFeedbackPercentage={positiveFeedbackPersentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}

export default App;
