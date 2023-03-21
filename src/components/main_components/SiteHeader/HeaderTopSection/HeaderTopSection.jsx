import React from 'react';
import classes from './HeaderTopSection.module.css'
import HeaderTopLeftSection from "./HeaderTopLeftSection/HeaderTopLeftSection";
import HeaderTopHiddenSection from "./HeaderTopHiddenSection/HeaderTopHiddenSection";
import HeaderTopRightSection from "./HeaderTopRightSection/HeaderTopRightSection";

const HeaderTopSection = () => {
    return (
        <div className={classes.headerTopSection}>
            <div className={classes.headerTopSectionHidden}>
                <HeaderTopHiddenSection />
            </div>
            <HeaderTopLeftSection />
            <HeaderTopRightSection />
        </div>
    );
};

export default HeaderTopSection;