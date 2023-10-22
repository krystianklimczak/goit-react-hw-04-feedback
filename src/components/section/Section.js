// 'React.Component'
import React, { Component } from 'react';

// css modules
import css from './Section.module.css';

// proptypes
import PropTypes from 'prop-types';

export default class Section extends Component {
    render() {
        // destructuring assignment
        const { title, children } = this.props;
        
        return (
            <div className={css.section}>
                <h2 className={css.section__title}>{title}</h2>
                {children}
            </div>
        )
    }
}

// proptypes of section
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};