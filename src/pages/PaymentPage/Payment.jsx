import React from 'react';
import classes from './Payment.module.css'
import {paymentArray} from "../../dataArrays";
import PaymentPost from "../../components/regular_components/Posts/PaymentPost/PaymentPost";
import PopularGoods from "../../components/regular_components/Products/PopularGoods/PopularGoods";

const Payment = () => {

    return (
        <div className={classes.PaymentMainContainer}>
            <div className={classes.PaymentWrapper}>
                <div className={classes.PaymentWrapperBlock}>
                    <div className={classes.PaymentPageTitleBlock}>
                        <h1 className={classes.PaymentPageTitle}>Оплата</h1>
                    </div>
                    {paymentArray.map(paymentPost => (<PaymentPost  key={paymentPost.id} paymentPost={paymentPost} /> ))}
                    <PopularGoods />
                </div>
            </div>

        </div>
    );
};

export default Payment;