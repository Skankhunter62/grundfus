import React from 'react';
import classes from './HeaderTopLeftSection.module.css'
import MyIconImg from "../../../../UIUX/MyIconImg/MyIconImg";
import messageIcon from "../../../../../assets/icons/header_icons/top-header__message-icon.svg";
import DefaultText from "../../../../UIUX/FontsButtons/Texts/DefaultText/DefaultText";

const HeaderTopLeftSection = () => {
    return (
        <div className={classes.headerTopSectionLeftSection}>
            <div>
                <MyIconImg src={messageIcon}/>
            </div>
            <div className={classes.headerTopSectionLeftSectionEmails}>
                <DefaultText  isPayment={true}>
                    <a href="mailto:spb@grundshop.ru">spb@grundshop.ru</a>
                </DefaultText>
                <DefaultText  isPayment={true}>
                    <a href="mailto:info@grundshop.ru">info@grundshop.ru</a>
                </DefaultText>
            </div>
        </div>
    );
};

export default HeaderTopLeftSection;