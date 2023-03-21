import React from 'react';
import classes from './MyCatalogBanner.module.css'
import main_banner from '../../../../assets/img/main_background_slider.webp'

const MyCatalogBanner = () => {
    return (
        <div className={classes.bannerWrapper}>
            <img src={main_banner} alt="Фоновое изображение главного баннера" width={1920} height={621} className={classes.bannerImg}/>
            <div className={classes.h1Section}>
                <h1 className={classes.bannerH1}>Каталог</h1>
            </div>
        </div>
    );
};

export default MyCatalogBanner;