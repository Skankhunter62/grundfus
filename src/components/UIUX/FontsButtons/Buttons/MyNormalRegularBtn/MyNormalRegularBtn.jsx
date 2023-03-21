import React from 'react';
import classes from './MyNormalRegularBtn.module.css'

const MyNormalRegularBtn = ({children, activeTab = false, change}) => {
    return (
        <button
            disabled={activeTab}
            onClick={() => change()}
            className={
                activeTab
                    ? `${classes.myNormalRegularBtn} ${classes.myNormalRegularBtnDisable}`
                    : `${classes.myNormalRegularBtn}`
            }
        >
            {children}
        </button>
    );
};

export default MyNormalRegularBtn;