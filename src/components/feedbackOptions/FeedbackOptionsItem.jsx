import { useFeedback } from 'hooks/feedbackContext';

import css from './FeedbackOptions.module.css';

export default function FeedbackOptionsItem(props) {
  const { option } = props;
  const { handleIncrement } = useFeedback();
  return (
    <li className={css.feedback__item}>
      <button
        type="button"
        name={option}
        onClick={handleIncrement}
        className={css.feedback__button}
      >
        {option}
      </button>
    </li>
  );
}
