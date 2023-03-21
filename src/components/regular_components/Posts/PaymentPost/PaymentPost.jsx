import React from 'react';
import classes from './PaymentPost.module.css'

const PaymentPost = ({paymentPost}) => {
    return (
        <div className={classes.PaymentPagePostBlock}>
            <h3 className={classes.PaymentPagePostTitle}>{paymentPost.title}</h3>
            <p className={classes.PaymentPagePostText}>{paymentPost.first_text}</p>
            <p className={classes.PaymentPagePostSubTitle}>{paymentPost.sub_title}</p>
            <ul className={classes.PaymentPagePostList}>
                {paymentPost?.list.map(listItem => (<li key={Math.random()} className={classes.PaymentPagePostListElement}>{listItem}</li>))}
            </ul>
            <p className={classes.PaymentPagePostSubTitle}>{paymentPost.sub_title_option}</p>
            <p className={classes.PaymentPagePostText}>{paymentPost.second_text}</p>
            <p className={classes.PaymentPagePostText}>{paymentPost?.third_text}</p>
        </div>
    );
};

export default PaymentPost;