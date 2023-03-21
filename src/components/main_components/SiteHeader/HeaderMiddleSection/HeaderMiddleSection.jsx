import React from 'react';
import classes from './HeaderMiddleSection.module.css'
import HeaderMiddleSectionLogo from "./HeaderMiddleSectionLogo/HeaderMiddleSectionLogo";
import HeaderMiddleSectionMenu from "./HeaderMiddleSectionMenu/HeaderMiddleSectionMenu";
import HeaderMiddleSectionSearch from "./HeaderMiddleSectionSearch/HeaderMiddleSectionSearch";
import HeaderMiddleSectionAction from "./HeaderMiddleSectionAction/HeaderMiddleSectionAction";
import HeaderMiddleSectionCart from "./HeaderMiddleSectionCart/HeaderMiddleSectionCart";

const HeaderMiddleSection = () => {
    return (
        <div className={classes.headerMiddleSection}>
            <HeaderMiddleSectionLogo/>
            <HeaderMiddleSectionMenu/>
            <HeaderMiddleSectionSearch/>
            <HeaderMiddleSectionAction/>
            <HeaderMiddleSectionCart/>
        </div>
    );
};

export default HeaderMiddleSection;