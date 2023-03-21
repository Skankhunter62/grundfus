import React from 'react';
import classes from './HeaderTopRightSection.module.css'
import MyIconImg from "../../../../UIUX/MyIconImg/MyIconImg";
import phoneIcon from "../../../../../assets/icons/header_icons/top-header__phone-icon.svg";
import DefaultText from "../../../../UIUX/FontsButtons/Texts/DefaultText/DefaultText";

const HeaderTopRightSection = () => {
    return (
        <div className={classes.headerTopSectionRightSection}>
            <div>
                <MyIconImg src={phoneIcon}/>
            </div>
            <div className={classes.headerTopSectionRightSectionPhonesBlock}>
                <div className={classes.headerTopSectionRightSectionPhones}>
                    <DefaultText isPayment={true}>
                        <a href="tel:+84994606761">8 (499) 460-67-61</a>
                    </DefaultText>
                    <DefaultText isPayment={true}>(Мск)</DefaultText>
                </div>
                <div className={classes.headerTopSectionRightSectionPhones}>
                    <DefaultText isPayment={true}>
                        <a href="tel:+88127482235">8 (812) 748-22-35</a>
                    </DefaultText>
                    <DefaultText isPayment={true}>(СПб)</DefaultText>
                </div>
                <div className={classes.headerTopSectionRightSectionPhones}>
                    <DefaultText isPayment={true}>
                        <a href="tel:+84992887479">8 (499) 288-74-79</a>
                    </DefaultText>
                    <DefaultText isPayment={true}>(Сервисный центр)</DefaultText>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopRightSection;