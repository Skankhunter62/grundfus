import React from 'react';
import classes from './MyFormTextArea.module.css'

const MyFormTextArea = (props) => {
    return (
        <textarea {...props} className={classes.MyFormTextArea} rows='4'/>
    );
};

export default MyFormTextArea;