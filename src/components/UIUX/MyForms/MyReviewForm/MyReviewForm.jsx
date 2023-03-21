import React, {useState} from 'react';
import classes from "../MyOrderContactForm/MyOrderContactForm.module.css";
import MyFormLabel from "../../MyInputs/MyFormLabel/MyFormLabel";
import MyFormInput from "../../MyInputs/MyFormInput/MyFormInput";
import MyCheckbox from "../../MyInputs/MyCheckbox/MyCheckbox";
import ProductTitleFilterAttributeTitle
    from "../../FontsButtons/Titles/ProductTitleFilterAttributeTitle/ProductTitleFilterAttributeTitle";

const MyReviewForm = ({product}) => {
    const [orderObject, setOrderObject] = useState({
        reviewer: '',
        rating: '',
        reviewer_email: '',
        review: '',
        product_id: product.id
    })
    return (
        <div className={classes.myOrderFormLayout}>
            <div className={classes.myOrderFormLayoutTitle}>
                <ProductTitleFilterAttributeTitle>Оставьте свой отзыв</ProductTitleFilterAttributeTitle>
            </div>
            <MyFormLabel labelText='Имя'>
                <MyFormInput type="text" name='reviewer' id='reviewer' placeholder='Иван' value={orderObject.reviewer} onChange={(e) => setOrderObject({...orderObject, reviewer: e.target.value})} labeltext='Имя'/>
            </MyFormLabel>
            <MyFormLabel labelText='Электронная почта'>
                <MyFormInput type="email" name='reviewer_email' id='reviewer_email' placeholder='Ваша почта' value={orderObject.reviewer_email} onChange={(e) => setOrderObject({...orderObject, reviewer_email: e.target.value})}/>
            </MyFormLabel>
            <MyFormLabel labelText='Рейтинг'>
                <MyFormInput type="text" name='rating' id='rating' placeholder='Иванович' value={orderObject.rating} onChange={(e) => setOrderObject({...orderObject, rating: e.target.value})}/>
            </MyFormLabel>
            <MyFormLabel labelText='Ваш отзыв'>
                <MyFormInput type="text" name='review' id='review' placeholder='Ваш отзыв' value={orderObject.review} onChange={(e) => setOrderObject({...orderObject, review: e.target.value})}/>
            </MyFormLabel>
            <MyCheckbox />
        </div>
    );
};

export default MyReviewForm;