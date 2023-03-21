import React from 'react';
import classes from './MyTopSlider.module.css'
import bc_img from '../../../../assets/img/main_background_slider.png'
import SliderReact from "../../main_top_slider/SliderReact";

const TopSlider = () => {

    return (
        <div className={classes.top_slider_wrapper}>
            <img src={bc_img} alt="" className={classes.background_main_slider}/>
            <div className={classes.main_container}>
                <div className={classes.slider_block}>
                    <SliderReact />
                </div>
            </div>
        </div>
    );
};

export default TopSlider;