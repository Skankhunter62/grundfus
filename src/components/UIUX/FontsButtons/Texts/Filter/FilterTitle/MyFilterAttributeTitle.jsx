import React from 'react';
import classes from './MyFilterAttributeTitle.module.css'
import AttributeArrow from '../../../../../../assets/filter_arrow.svg'

const MyFilterAttributeTitle = ({children, isAttribute=false, checkVisibleList, displayList}) => {
    return (
        <div onClick={checkVisibleList} className={isAttribute ? classes.MyFilterAttributeTitleBlock : ''}>
            <p className={
                isAttribute
                    ? !displayList
                        ? classes.MyFilterAttributeTitle
                        : classes.MyFilterAttributeTitleAttribute
                    : classes.MyFilterAttributeTitle}>
                {children}
            </p>
            {isAttribute ? <img src={AttributeArrow} alt="" className={displayList ? classes.MyFilterAttributeTitleArrow : classes.MyFilterAttributeTitleArrowVisible}/> : <></>}
        </div>
    );
};

export default MyFilterAttributeTitle;