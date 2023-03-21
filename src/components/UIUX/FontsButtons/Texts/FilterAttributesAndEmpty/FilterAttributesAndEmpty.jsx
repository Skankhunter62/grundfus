import React from 'react';
import classes from './FilterAttributesAndEmpty.module.css'

const FilterAttributesAndEmpty = ({children, isEmpty}) => {
    return (
        <p className={isEmpty ? classes.FilterAttributesEmpty : classes.FilterAttributesAndEmpty}>
            {children}
        </p>
    );
};

export default FilterAttributesAndEmpty;