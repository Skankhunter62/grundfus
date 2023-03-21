import React from 'react';
import classes from './Footer.module.css'
import FooterLeft from "./FooterLeft/FooterLeft";
import FooterRight from "./FooterRight/FooterRight";

const Footer = () => {
    return (
        <div className={classes.footer_main}>
            <div className={classes.footer_wrapper}>
                <div className={classes.FooterBlock}>
                    <FooterLeft />
                    <FooterRight />
                </div>
            </div>
        </div>
    );
};

export default Footer;