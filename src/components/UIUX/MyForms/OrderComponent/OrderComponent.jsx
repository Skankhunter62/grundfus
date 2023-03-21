import React from 'react';
import classes from './OrderComponent.module.css'
import OrderPageContactData from "./OrderPageContactData/OrderPageContactData";
import OrderPagePayment from "./OrderPagePayment/OrderPagePayment";
import OrderPageAddingFiles from "./OrderPageAddingFiles/OrderPageAddingFiles";
import OrderPageDeliveryMethod from "./OrderPageDeliveryMethod/OrderPageDeliveryMethod";
import {ClockLoader} from "react-spinners";

const OrderComponent = ({orderObject, setOrderObject, isEmptyFields, deliveryMethod, setDeliveryMethod, paymentMethod, setPaymentMethod, loading}) => {

    return (
        <div className={classes.OrderComponentBlock}>
            {loading ? (
                <div className={classes.OrderComponentLoader}>
                    <ClockLoader color="#003767" size='175'/>
                </div>
            ) : ''}
            <div className={!loading ? classes.OrderComponentGrid : classes.OrderComponentGridLoading}>
                <OrderPageContactData isEmptyFields={isEmptyFields} setOrderObject={setOrderObject} orderObject={orderObject}/>
                <OrderPagePayment setPaymentMethod={setPaymentMethod} paymentMethod={paymentMethod}/>
                <OrderPageAddingFiles setOrderObject={setOrderObject} orderObject={orderObject}/>
                <OrderPageDeliveryMethod setDeliveryMethod={setDeliveryMethod} deliveryMethod={deliveryMethod} />
            </div>
        </div>
    );
};

export default OrderComponent;