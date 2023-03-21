import React from 'react';
import classes from './ProductImgCarousel.module.css'

const ProductImgCarousel = (props) => {
    return (
        <div
            className={props.mainImg === props.index  ? classes.activeCarouselImg : classes.singleCarouselImg}
            onClick={()=>{ props.changeMainImg(props.index) }}
        >
            <img src={props.img.src} alt={props.img.alt} className={classes.img}/>
        </div>
    );
};

export default ProductImgCarousel;