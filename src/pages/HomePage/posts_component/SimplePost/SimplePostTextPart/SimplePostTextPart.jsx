import React from 'react';
import classes from './SimplePostTextPart.module.css'

const SimplePostTextPart = ({title, content, subContent}) => {
    return (
        <div className={classes.SimplePostTextPart}>
            <h2 className={classes.SimplePostTextPartTitle}>{title}</h2>
            <p className={classes.SimplePostTextPartText}>{content}</p>
            <p className={classes.SimplePostTextPartText}>{subContent}</p>
        </div>
    );
};

export default SimplePostTextPart;