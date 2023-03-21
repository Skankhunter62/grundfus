import React from 'react';
import classes from './MySelect.module.css'

const MySelect = ({value, defaultValue, options, onChange}) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
            className={classes.mySelect}
        >
            <option disabled={true} value="">{defaultValue}</option>
            {options.map(option =>
                <option value={option.value} key={option.value}>{option.name}</option>
            )}
        </select>
    );
};

export default MySelect;