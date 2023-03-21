import React from 'react';
import classes from './AboutBannerList.module.css'
import AboutBannerElement from "../about_banner_element/AboutBannerElement";

const AboutBannerList = (props) => {

    return (
        <div className={classes.about_banner_layout_block}>
            {props.banner.map(elem =>
                <AboutBannerElement
                    cell={props.cell}
                    selectElement={props.selectElement}
                    banner = {elem} key={elem.id}
                />
            )}
        </div>
    );
};

export default AboutBannerList;