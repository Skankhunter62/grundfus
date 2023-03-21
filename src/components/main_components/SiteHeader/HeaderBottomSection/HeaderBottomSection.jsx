import React from 'react';
import classes from './HeaderBottomSection.module.css'
import HeaderTopHiddenSection from "../HeaderTopSection/HeaderTopHiddenSection/HeaderTopHiddenSection";
import HeaderBottomRightSection from "./HeaderBottomRightSection/HeaderBottomRightSection";

const HeaderBottomSection = () => {
    return (
        <div className={classes.HeaderBottomSection}>
            <div className={classes.HeaderBottomSectionHidden}>
                <HeaderTopHiddenSection/>
            </div>
            <HeaderBottomRightSection/>
        </div>
    );
};

export default HeaderBottomSection;