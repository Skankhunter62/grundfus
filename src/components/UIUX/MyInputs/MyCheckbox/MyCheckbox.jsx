import React from 'react';
import classes from './MyCheckbox.module.css'
import {Radio} from "@mui/material";
import MyOrderPaymentFormTextBlock
    from "../../MyForms/MyOrderPaymentFormTextBlock/MyOrderPaymentFormTextBlock";

const MyCheckbox = ({setPaymentMethod, paymentMethod}) => {
    const handleChange = (event) => {
        setPaymentMethod(event.target.value)
    }
    return (
        <div className={classes.myCheckbox}>
            <div className={classes.radiaBlockSubText}>
                <div className={classes.radiaBlock}>
                    <Radio  checked={paymentMethod === 'cod'}  onChange={handleChange}  value="cod"  name="payment_method" />
                </div>
                <MyOrderPaymentFormTextBlock checkboxText='Расчет происходит с курьером наличными, при получении товара или через кассу на условиях самовывоза' checkboxTitle='Наличными при получении'/>
            </div>
            <div className={classes.radiaBlockSubText}>
                <div className={classes.radiaBlock}>
                    <Radio  checked={paymentMethod === 'bacs'}  onChange={handleChange}  value="bacs"  name="payment_method"  />
                </div>
                <MyOrderPaymentFormTextBlock checkboxTitle='Безналичный расчет' checkboxText='Отгрузка товара производится при 100 % оплате счета (при заказе по безналичному расчету просьба отправьте заказ на почту info@grundshop.ru , указав в письме количество насосов и их модели, а также контактный номер телефона). Дата отгрузки согласовывается предварительно с менеджером компании. При получении товара обязательно имейте при себе фирменную печать или доверенность.' />
            </div>
        </div>
    );
};

export default MyCheckbox;