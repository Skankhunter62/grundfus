import React from 'react';
import classes from './CatalogOrderEmptyButton.module.css'
import {Link} from "react-router-dom";

const CatalogOrderEmptyButton = ({children, empty = false, link = ''}) => {
    return (
        <Link to={link} className={
            empty
                ? `${classes.CatalogOrderEmptyButton} ${classes.CatalogEmptyButton}`
                : classes.CatalogOrderEmptyButton
        }>
            {children}
        </Link>
    );
};

export default CatalogOrderEmptyButton;