// 'React.Component'
import React, { Component } from 'react';

// css modules
import css from './FeedbackOptions.module.css';

// proptypes
import PropTypes from 'prop-types';

export default class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props;
        
        return (
            <div className={css.feedback}>
                <ul className={css.feedback__list}>
                    {options.map(option => {
                        return (
                            <li key={option} className={css.feedback__item}>
                                <button type='button' name={option} onClick={onLeaveFeedback} className={css.feedback__button}>
                                    {option}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};