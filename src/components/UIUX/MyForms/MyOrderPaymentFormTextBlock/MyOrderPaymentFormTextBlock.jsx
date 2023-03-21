import React from 'react';
import classes from './MyOrderPaymentFormTextBlock.module.css'
import FilterAttributesAndEmpty from "../../FontsButtons/Texts/FilterAttributesAndEmpty/FilterAttributesAndEmpty";
import DefaultText from "../../FontsButtons/Texts/DefaultText/DefaultText";

const MyOrderPaymentFormTextBlock = ({checkboxTitle, checkboxText}) => {
    return (
        <div className={classes.MyOrderPaymentFormSubText}>
            <FilterAttributesAndEmpty isEmpty={true}>{checkboxTitle}</FilterAttributesAndEmpty>
            <DefaultText isPayment={true}>{checkboxText}</DefaultText>
        </div>
    );
};

export default MyOrderPaymentFormTextBlock;