import React from 'react';
import classes from './MySuccessOrder.module.css'
import successOrder from '../../../../assets/icons/successOrder/success-order.png'

const MySuccessOrder = ({orderId}) => {
    return (
        <div className={classes.MySuccessOrderBlock}>
            <div className={classes.MySuccessOrderWrapper}>
                <p className={classes.MySuccessOrderTitle}>
                    Ваш заказ был успешно сформирован!
                </p>
                <img src={successOrder} alt="" className={classes.MySuccessOrderImg}/>
                <p className={classes.MySuccessOrderTitleSecond}>
                    Спасибо за Ваше доверие к нам!
                </p>
                <p className={classes.MySuccessOrderSubTextId}>
                    Номер вашего заказа: <span className={classes.MySuccessOrderIdSpan}>{orderId}</span>
                </p>
                <p className={classes.MySuccessOrderSubText}>
                    Вы получите уведомление о заказе на почту, указанную при оформлении заказа!
                </p>
            </div>
        </div>
    );
};

export default MySuccessOrder;