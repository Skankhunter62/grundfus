import React from 'react';
import classes from './HorizontalProductCardImgBlock.module.css'
import default_img from "../../../../../assets/img/default_img.png";

const HorizontalProductCardImgBlock = ({product}) => {
    return (
        <div className={classes.imgBlock}>
            <img src={product?.images?.length !== 0 ? product?.images[0]?.src : default_img} alt="Изображение товара" width={300} height={350} className={classes.img}/>
        </div>
    );
};

export default HorizontalProductCardImgBlock;