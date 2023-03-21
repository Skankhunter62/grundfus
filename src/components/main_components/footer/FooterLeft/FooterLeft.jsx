import React from 'react';
import {footerPhones} from "../../../../dataArrays";
import classes from './FooterLeft.module.css'

const FooterLeft = () => {
    return (
        <div className={classes.footer_left_section}>
            <div className={classes.title_block}>
                <h2 className={classes.footer_title}>
                    Насосы
                    <span className={classes.span_element}> grundfos</span>
                </h2>
            </div>
            <div className={classes.phones_block}>
                {footerPhones.map(item =>
                    <div className={classes.phone_single_element} key={item.id}>
                        <div className={classes.phone_text}>{item.title}</div>
                        <a href={"tel:"+item.tel}><div className={classes.phone}>{item.phone}</div></a>
                    </div>
                )}
            </div>
            <div className={classes.copy}>
                &copy; Все права защищены
            </div>
        </div>
    );
};

export default FooterLeft;