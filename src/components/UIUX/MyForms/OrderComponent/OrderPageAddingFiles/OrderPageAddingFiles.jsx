import React from 'react';
import classes from './OrderPageAddingFiles.module.css'
import MyTextArea from "../../../MyInputs/MyTextArea/MyTextArea";
import ProductTitleFilterAttributeTitle
    from "../../../FontsButtons/Titles/ProductTitleFilterAttributeTitle/ProductTitleFilterAttributeTitle";

const OrderPageAddingFiles = ({setOrderObject, orderObject}) => {
    return (
        <div className={classes.OrderPageAddingFiles}>
            <ProductTitleFilterAttributeTitle>Дополнительная информация</ProductTitleFilterAttributeTitle>
            <MyTextArea value={orderObject.customer_note} onChange={(e) => setOrderObject({...orderObject, customer_note: e.target.value})} />
        </div>
    );
};

export default OrderPageAddingFiles;