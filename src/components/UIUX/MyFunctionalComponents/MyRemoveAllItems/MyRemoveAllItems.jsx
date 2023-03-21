import React from 'react';
import classes from './MyRemoveAllItems.module.css'
import Checkbox from "@mui/material/Checkbox";

const label = {inputProps: {'aria-label': 'Checkbox demo'}};

const MyRemoveAllItems = ({
                              stateName,
                              checkSelected,
                              stateObject,
                              stateRemoveObject,
                              stateMassObject,
                              stateMassRemoveObject,
                              stateMassAddItemsObject,
                              stateMassRemoveAllObject
                          }) => {
    const deleteSelectedElements = (productArray) => {
        productArray.map(singleProduct => {
            stateRemoveObject(singleProduct)
            stateMassRemoveObject(singleProduct)
        })
        localStorage.removeItem(stateName)
    }

    return (
        <div className={classes.removeAll}>
            <div className={classes.leftPart}>
                <div className={classes.checkboxBlock}>
                    <Checkbox {...label} onClick={() => {
                        checkSelected()
                        if(stateMassObject.length < stateObject.length){
                            stateMassAddItemsObject(stateObject)
                        }else{
                            stateMassRemoveAllObject()
                        }
                    }}/>
                    <div className={classes.checkAll}>Выбрать все</div>
                </div>
                <div className={classes.regularText}>
                    Выбрано товаров: {stateMassObject.length}
                </div>
            </div>
            <div className={stateMassObject.length !== 0 ? classes.regularText : classes.regularTextDisabled}
                 onClick={() => {
                     deleteSelectedElements(stateMassObject)
                 }}>
                Удалить выбранное
            </div>
        </div>
    );
};

export default MyRemoveAllItems;