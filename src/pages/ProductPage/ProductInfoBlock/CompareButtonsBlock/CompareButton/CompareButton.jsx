import React from 'react';
import {ReactComponent as CompareIcon} from "../../../../../assets/icons/header_icons/main-header__compare-icon.svg";
import classes from './CompareButton.module.css'

const CompareButton = () => {
    return (
        <div className={classes.iconsBlock}>
            <div className={classes.iconStyles}>
                <CompareIcon />
            </div>
            <span className={classes.actionButton}>Сравнить</span>
        </div>
    );
};

export default CompareButton;