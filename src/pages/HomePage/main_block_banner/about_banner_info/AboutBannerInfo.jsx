import React from "react";
import classes from "./AboutBannerInfo.module.css";
import { ReactComponent as PrevArrow } from "../../../../assets/icons/about_banner/slider_about_arrow_prev.svg";
import { ReactComponent as NextArrow } from "../../../../assets/icons/about_banner/slider_about_arrow_next.svg";

const AboutBannerInfo = ({ banner, buttonClickPrev, buttonClickNext }) => {
  return (
    <>
      {banner.map((element) => (
        <div className={classes.about_banner_info_block} key={element.id}>
          <div>
            <p className={classes.title_about_banner_info}>
              Преимущества нашего магазина
            </p>
          </div>
          <div className={classes.about_banner_animation}>
            <h3 className={classes.about_banner_info_elem_title}>
              {element.title}
            </h3>
            <div className={classes.about_banner_info_elem_text}>
              {element.body}
            </div>
          </div>
          <div className={classes.about_banner_button_block}>
            <div
              className={classes.about_banner_button}
              onClick={() => {
                buttonClickPrev();
              }}
            >
              <PrevArrow />
            </div>
            <div
              className={classes.about_banner_button}
              onClick={() => {
                buttonClickNext();
              }}
            >
              <NextArrow />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutBannerInfo;
