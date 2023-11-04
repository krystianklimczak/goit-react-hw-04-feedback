import { useFeedback } from 'components/feedbackContext';

import css from './Statistics.module.css';

export default function Statistics() {
  const { good, neutral, bad, total, positiveFeedback, handleReset } =
    useFeedback();

  return (
    <div className={css.statistics}>
      <ul className={css.statistics__list}>
        <li className={css.statistics__item}>
          <p>Good: {good}</p>
        </li>
        <li className={css.statistics__item}>
          <p>Neutral: {neutral}</p>
        </li>
        <li className={css.statistics__item}>
          <p>Bad: {bad}</p>
        </li>
        <li className={css.statistics__item}>
          <p>Total: {total}</p>
        </li>
        <li className={css.statistics__item}>
          <p>Positive feedback: {positiveFeedback}</p>
        </li>
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
