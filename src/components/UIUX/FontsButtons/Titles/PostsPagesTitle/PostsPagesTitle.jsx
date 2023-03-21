import React from 'react';
import classes from './PostsPagesTitle.module.css'

const PostsPagesTitle = ({children, isPageTitle = false}) => {
    return (
        <>
            {
                isPageTitle
                    ? <h1 className={classes.PostsPagesTitle}>{children}</h1>
                    : <h2 className={classes.PostsPagesTitle}>{children}</h2>
            }
        </>
    );
};

export default PostsPagesTitle;