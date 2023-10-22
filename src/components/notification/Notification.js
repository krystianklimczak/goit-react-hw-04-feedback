// 'React.Component'
import React, { Component } from 'react';

// css modules
import css from './Notification.module.css';

// proptypes
import PropTypes from 'prop-types';

export default class Notification extends Component {
    render() {
        // destructuring assignment
        const { message } = this.props;

        return (
            <div className={css.message}>
                <p  className={css.message__text}>{message}</p>
            </div>
        )
    }
}

// proptypes of notification
Notification.propTypes = {
    message: PropTypes.string.isRequired,
};