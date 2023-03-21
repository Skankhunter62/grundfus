import React from 'react';
import classes from './OrderPageDeliveryMethod.module.css'
import {Radio} from "@mui/material";
import MyOrderPaymentFormTextBlock
    from "../../MyOrderPaymentFormTextBlock/MyOrderPaymentFormTextBlock";
import ProductTitleFilterAttributeTitle
    from "../../../FontsButtons/Titles/ProductTitleFilterAttributeTitle/ProductTitleFilterAttributeTitle";

const OrderPageDeliveryMethod = ({deliveryMethod, setDeliveryMethod, props}) => {
    const handleChange = (event) => {
        setDeliveryMethod(event.target.value)
    }
    return (
        <div {...props} className={classes.OrderPageDeliveryMethod}>
            <ProductTitleFilterAttributeTitle>Выберите способ доставки</ProductTitleFilterAttributeTitle>
            <div className={classes.radiaBlockSubText}>
                <div className={classes.radiaBlock}>
                    <Radio  checked={deliveryMethod === 'free_shipping'}   onChange={handleChange} name='method_id' value="free_shipping" />
                </div>
                <MyOrderPaymentFormTextBlock checkboxText='' checkboxTitle='Доставка курьером'/>
            </div>
            <div className={classes.radiaBlockSubText}>
                <div className={classes.radiaBlock}>
                    <Radio  checked={deliveryMethod === 'local_pickup'}  onChange={handleChange} name='method_id' value="local_pickup"/>
                </div>
                <MyOrderPaymentFormTextBlock checkboxText='' checkboxTitle='Самовывоз'/>
            </div>
        </div>
    );
};

export default OrderPageDeliveryMethod;