import React from 'react';
import classes from './MyIconImg.module.css'

const MyIconImg = ({src, props}) => {
    return (
        <img {...props} src={src} alt="" className={classes.myIconImg}/>
    );
};

export default MyIconImg;