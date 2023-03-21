import React from 'react';
import classes from './BigPostsTitles.module.css'

const BigPostsTitles = ({children}) => {
    return (
        <h2 className={classes.BigPostsTitle}>
            {children}
        </h2>
    );
};

export default BigPostsTitles;