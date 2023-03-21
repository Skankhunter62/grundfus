import React from 'react';
import classes from "../CompareButton/CompareButton.module.css";
import {ReactComponent as WishlistIcon} from "../../../../../assets/icons/header_icons/main-header__wishlist-icon.svg";

const WishlistButton = () => {

    return (
        <div className={classes.iconsBlock}>
            <div className={classes.iconStyles}>
                <WishlistIcon/>
            </div>
            <span className={classes.actionButton}>Избранное</span>
        </div>
    );
};

export default WishlistButton;