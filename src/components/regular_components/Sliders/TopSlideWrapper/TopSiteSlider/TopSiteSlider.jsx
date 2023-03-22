import React, { useState } from "react";
import classes from "./TopSiteSlider.module.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useGetPostsByCategory } from "../../../../../WC_WP_API/CustomHooksAndFunctions/wp_hooks/wpHooks";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import TopSiteSliderTextBlock from "./TopSiteSliderTextBlock/TopSiteSliderTextBlock";
import { BeatLoader } from "react-spinners";

const TopSiteSlider = () => {
  const [loader, setLoader] = useState(true);
  const loaderCallback = () => setLoader(false);
  const mainPostsArray = useGetPostsByCategory(33, loaderCallback);
  SwiperCore.use([Autoplay]);

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={10}
      mousewheel={true}
      slidesPerView={1}
      loop={true}
      direction="vertical"
      pagination={{
        clickable: true,
        bulletClass: classes.TopSiteSliderBullet,
        bulletActiveClass: classes.TopSiteSliderBullet_active,
      }}
      autoplay={{ delay: 5000000 }}
    >
      {loader ? (
        <SwiperSlide key={Math.random() + 1}>
          <div className={classes.TopSiteSliderBlockLoader}>
            <BeatLoader color="#003767" size={30} />
          </div>
        </SwiperSlide>
      ) : mainPostsArray?.length !== 0 ? (
        mainPostsArray.map((post) => (
          <SwiperSlide key={post?.id}>
            <div className={classes.TopSiteSliderBlock}>
              <TopSiteSliderTextBlock post={post} />
              <div className={classes.TopSiteSliderSliderImgBlock}>
                <img
                  src={post?.fimg_url}
                  alt=""
                  className={classes.TopSiteSliderSliderImg}
                />
              </div>
            </div>
          </SwiperSlide>
        ))
      ) : (
        <React.Fragment>
          Bad connection to server, please reload page
        </React.Fragment>
      )}
    </Swiper>
  );
};

export default TopSiteSlider;
