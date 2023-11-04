import Section from './section/Section';
import { useFeedback } from '../hooks/feedbackContext';
import Statistics from './statistics/Statistics';
import Notification from './notification/Notification';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';

import css from './App.module.css';

export default function App() {
  const { total } = useFeedback();

  return (
    <div className={css.container}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions />
      </Section>

      <Section title={'Statistics'}>
        {total === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics />
        )}
      </Section>
    </div>
  );
  // }
}
