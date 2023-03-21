import React from 'react';
import classes from './MyFormLabel.module.css'

const MyFormLabel = ({children, labelText}) => {
    return (
        <label className={classes.MyFormInputLabel}>
            {labelText}
            {children}
        </label>
    );
};

export default MyFormLabel;