import React from 'react';
import classes from './MyFormInput.module.css'

const MyFormInput = (props) => {
    return (
        <input {...props} className={classes.myFormInput}/>
    );
};

export default MyFormInput;