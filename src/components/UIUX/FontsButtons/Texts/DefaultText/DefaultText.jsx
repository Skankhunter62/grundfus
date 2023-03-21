import React from 'react';
import classes from './DefaultText.module.css'
import {Link} from "react-router-dom";

const DefaultText = ({children, isPayment=false, isLink = false, link=''}) => {
    return (
        <>
            {
                isLink
                    ?(
                        <Link to={link} className={classes.DefaultTextPayment}>
                            {children}
                        </Link>
                    )
                    :(
                        <p className={isPayment ? classes.DefaultTextPayment : classes.DefaultText}>
                            {children}
                        </p>
                    )
            }
        </>
    );
};

export default DefaultText;