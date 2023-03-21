import React from 'react';
import classes from './HeaderTopHiddenSection.module.css'
import MyIconImg from "../../../../UIUX/MyIconImg/MyIconImg";
import clockIcon from "../../../../../assets/icons/header_icons/top-header__clock-icon.svg";
import phoneIcon from "../../../../../assets/icons/header_icons/top-header__phone-icon.svg";
import DefaultText from "../../../../UIUX/FontsButtons/Texts/DefaultText/DefaultText";

const HeaderTopHiddenSection = () => {
    return (
        <div className={classes.headerTopSectionLaptopHidden}>
            <div className={classes.HeaderTopHiddenSectionMobileWorkBlock}>
                <div>
                    <MyIconImg src={clockIcon}/>
                </div>
                <div className={classes.headerTopSectionLaptopHiddenText}>
                    <DefaultText isPayment={true}>Работаем ежедневно</DefaultText>
                    <DefaultText isPayment={true}>с 09:00 до 01:00</DefaultText>
                </div>
            </div>
            <div className={classes.headerTopSectionLaptopHiddenTextMobileIcons}>
                <MyIconImg src={phoneIcon}/>
                <div className={classes.HeaderTopHiddenSectionMobileBottomPhone}>
                    <DefaultText isPayment={true}>Свяжитесь с нами</DefaultText>
                </div>
                <div className={classes.HeaderTopHiddenSectionMobileBottomPhones}>
                    <DefaultText isPayment={true}>8 (499) 460-67-61</DefaultText>
                    <DefaultText isPayment={true}>8 (812) 748-22-35</DefaultText>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopHiddenSection;