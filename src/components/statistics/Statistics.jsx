import StatisticsItem from './StatisticsItem';
import { useFeedback } from 'hooks/feedbackContext';

import css from './Statistics.module.css';

export default function Statistics() {
  const { good, neutral, bad, total, positiveFeedback, handleReset } =
    useFeedback();

  return (
    <div className={css.statistics}>
      <ul className={css.statistics__list}>
        <StatisticsItem title={'Good'} value={good} />
        <StatisticsItem title={'Neutral'} value={neutral} />
        <StatisticsItem title={'Bad'} value={bad} />
        <StatisticsItem title={'Total'} value={total} />
        <StatisticsItem title={'Positive Feedback'} value={positiveFeedback} />
        <button
          type="button"
          className={css.statistics__btn}
          onClick={handleReset}
        >
          Reset
        </button>
      </ul>
    </div>
  );
}
