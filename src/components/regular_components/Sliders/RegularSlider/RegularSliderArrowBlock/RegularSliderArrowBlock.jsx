import React from 'react';
import classes from './RegularSliderArrowBlock.module.css'

const RegularSliderArrowBlock = ({navigationPrevRef, navigationNextRef}) => {
    return (
        <div className={classes.myRegularSliderArrowSection}>
            <div ref={navigationPrevRef}  className={classes.myRegularSliderArrowBlock} onClick={()=>console.log('prev ref')}/>
            <div ref={navigationNextRef}  className={classes.myRegularSliderArrowBlock}/>
        </div>
    );
};

export default RegularSliderArrowBlock;