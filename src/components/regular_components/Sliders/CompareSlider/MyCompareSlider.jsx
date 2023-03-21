import React from 'react';
import classes from './MyCompareSlider.module.css'
import {Navigation} from "swiper";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import {useTypedSelector} from "../../../../store/hooks/useTypedSelector";
import MySmallProductCardSlider from "../../../UIUX/MyBlocks/MySmallProductCardSlider/MySmallProductCardSlider";

const MyCompareSlider = ({setSliderCounter}) => {
    const {compare} = useTypedSelector(state => state)
    return (
        <div className={classes.myRegularSliderBlock}>
            <Swiper
                modules={[Navigation]}
                spaceBetween={5}
                slidesPerView={2}
                slidesPerGroup={2}
                navigation
                onSlideChange={(e) => {
                    if(e.realIndex !== 0){
                        setSliderCounter(e.realIndex - 1)
                    }else{
                        setSliderCounter(e.realIndex)
                    }
                }
            }
            >
                {compare.map(product =>
                    <SwiperSlide key={product.id}>
                        <MySmallProductCardSlider product={product}/>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
};

export default MyCompareSlider;