import React, { useState } from 'react';

import FeedbackOptionsItem from './FeedbackOptionsItem';

import css from './FeedbackOptions.module.css';

export default function FeedbackOptions() {
  const [options] = useState(['good', 'neutral', 'bad']);
  return (
    <div className={css.feedback}>
      <ul className={css.feedback__list}>
        {options.map(option => {
          return <FeedbackOptionsItem option={option} key={option} />;
        })}
      </ul>
    </div>
  );
}
