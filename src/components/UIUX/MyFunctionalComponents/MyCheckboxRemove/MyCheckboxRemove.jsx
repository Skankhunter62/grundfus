import React, {useState} from 'react';
import classes from './MyCheckboxRemove.module.css'
import Checkbox from "@mui/material/Checkbox";

const MyCheckboxRemove = ({product, selected, stateMassAddItemsObject}) => {
    const [localChecked, setLocalChecked] = useState(false)
    return (
        <div className={classes.checkboxBlock}>
            <Checkbox
                label="Label"
                onClick={() => {
                    stateMassAddItemsObject(product)
                    setLocalChecked(!localChecked)
                }}
                checked={selected || localChecked}
            />
        </div>
    );
};

export default MyCheckboxRemove;