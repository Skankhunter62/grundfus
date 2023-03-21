import React from 'react';
import classes from './FilterText.module.css'

const FilterText = ({children, clearFilters}) => {
    return (
        <p className={classes.FilterText} onClick={clearFilters}>
            {children}
        </p>
    );
};

export default FilterText;