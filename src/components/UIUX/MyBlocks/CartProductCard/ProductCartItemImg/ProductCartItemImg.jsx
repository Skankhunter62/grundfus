import React from 'react';
import classes from './ProductCartItemImg.module.css'
import default_img from "../../../../../assets/img/default_img.png";

const ProductCartItemImg = ({productImg}) => {
    return (
        <div className={classes.productCartItemImgBlock}>
            <img src={productImg.src || default_img} alt="" className={classes.img}/>
        </div>
    );
};

export default ProductCartItemImg;