// 'React.Component'
import React, { Component } from 'react';

// css modules
import css from './Statistics.module.css';

// proptypes
import PropTypes from 'prop-types';

export default class Statistics extends Component {

    render() {
        // destructuring assignment
        const {good, neutral, bad, total, positiveFeedback, handleReset} = this.props;

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
                <button type='button' className={css.statistics__btn} onClick={handleReset}>Reset</button>
                </ul>
            </div>
        )
    }
}

// proptypes of statistics
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.string.isRequired,
};