import React from 'react';
import classes from './TopSlideWrapper.module.css'
import sliderBackImg from '../../../../assets/img/main_background_slider.webp'
import TopSiteSlider from "./TopSiteSlider/TopSiteSlider";

const TopSlideWrapper = () => {
    return (
        <div className={classes.TopSlideWrapper}>
            <img src={sliderBackImg} alt="Фоновое изображение слайдера" width={1920} height={540} className={classes.TopSlideWrapperImg}/>
            <div className={classes.TopSlideWrapperContainer}>
                <div className={classes.TopSlideWrapperContainerWrapper}>
                    <TopSiteSlider />
                </div>
            </div>
        </div>
    );
};

export default TopSlideWrapper;