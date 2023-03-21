import React from 'react';
import classes from './Header.module.css'
import HeaderTopSection from "./HeaderTopSection/HeaderTopSection";
import HeaderMiddleSection from "./HeaderMiddleSection/HeaderMiddleSection";
import HeaderBottomSection from "./HeaderBottomSection/HeaderBottomSection";

const Header = () => {
    return (
        <header className={classes.headerMainLayoutBlock}>
            <div className={classes.headerWrapper}>
                <HeaderTopSection />
                <HeaderMiddleSection />
                <HeaderBottomSection />
            </div>
        </header>
    );
};

export default Header;