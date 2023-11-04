import React, { useState } from 'react';

import { useFeedback } from 'components/feedbackContext';

import css from './FeedbackOptions.module.css';

export default function FeedbackOptions() {
  const [options] = useState(['good', 'neutral', 'bad']);
  const { handleIncrement } = useFeedback();

  return (
    <div className={css.feedback}>
      <ul className={css.feedback__list}>
        {options.map(option => {
          return (
            <li key={option} className={css.feedback__item}>
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
        })}
      </ul>
    </div>
  );
}
