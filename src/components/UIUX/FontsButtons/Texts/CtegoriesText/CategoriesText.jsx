import React from 'react';
import classes from './CategoriesText.module.css'
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../../../../../store/hooks/useTypedSelector";

const CategoriesText = ({children}) => {
    const {singleCategory} = useTypedSelector(state => state)

    return (
        <p className={singleCategory[0]?.name === children ? `${classes.CategoriesText} ${classes.CategoriesTextActive}` : classes.CategoriesText}>
            {children}
        </p>
    );
};

export default CategoriesText;