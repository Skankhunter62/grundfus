import React from 'react';
import classes from './HeaderMiddleSectionLogo.module.css'
import siteLogo from '../../../../../assets/img/main-header__grundfos-logo.svg'
import {Link} from "react-router-dom";

const HeaderMiddleSectionLogo = () => {
    return (
        <Link to='/' className={classes.headerMiddleSectionLogoBlock}>
            <img src={siteLogo} alt="Grundfos насосы купить в Москву" className={classes.headerMiddleSectionLogoImg}/>
            <p className={classes.headerMiddleSectionLogoText}>Официальный партнер Grundfos</p>
        </Link>
    );
};

export default HeaderMiddleSectionLogo;