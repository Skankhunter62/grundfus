import React, { useRef, useState } from "react";
import classes from "./RegularSlider.module.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import GridProductCard from "../../../UIUX/MyBlocks/GridProductCard/GridProductCard";
import RegularSliderArrowBlock from "./RegularSliderArrowBlock/RegularSliderArrowBlock";
import { BeatLoader } from "react-spinners";
import PostsPagesTitle from "../../../UIUX/FontsButtons/Titles/PostsPagesTitle/PostsPagesTitle";

const RegularSlider = ({
  title,
  goods,
  loader = false,
  sliderChangePopupState,
}) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  SwiperCore.use([Autoplay]);

  return (
    <div className={classes.myRegularSliderBlock}>
      <PostsPagesTitle>{title}</PostsPagesTitle>
      <>
        {loader ? (
          <div className={classes.MyRegularSliderBlockLoader}>
            <BeatLoader color="#003767" size={30} />
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            slidesPerGroup={4}
            speed={1200}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              1440: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetweenSlides: 150,
              },
              1024: {
                slidesPerGroup: 3,
                slidesPerView: 3,
                spaceBetweenSlides: 150,
              },
              800: {
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetweenSlides: 150,
              },
              700: {
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetweenSlides: 50,
              },
              600: {
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetweenSlides: 150,
              },
              500: {
                slidesPerGroup: 1,
                slidesPerView: 1,
                spaceBetweenSlides: 150,
              },
              400: {
                slidesPerGroup: 1,
                slidesPerView: 1,
                spaceBetweenSlides: 50,
              },
              300: {
                slidesPerGroup: 1,
                slidesPerView: 1,
                spaceBetweenSlides: 150,
              },
              200: {
                slidesPerGroup: 1,
                slidesPerView: 1,
                spaceBetweenSlides: 150,
              },
            }}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 10000 }}
            style={{ marginTop: "15px" }}
          >
            {goods.map((product) => (
              <SwiperSlide key={product.id}>
                <GridProductCard
                  product={product}
                  slider={true}
                  sliderChangePopupState={sliderChangePopupState}
                />
              </SwiperSlide>
            ))}
            <RegularSliderArrowBlock
              navigationPrevRef={navigationPrevRef}
              navigationNextRef={navigationNextRef}
            />
          </Swiper>
        )}
      </>
    </div>
  );
};

export default RegularSlider;
