import React from 'react';
import classes from './MyCompareAttributesBlock.module.css'
import {useTypedSelector} from "../../../../store/hooks/useTypedSelector";
import MyCompareSlider from "../../../regular_components/Sliders/CompareSlider/MyCompareSlider";

const MyCompareAttributesBlock = ({setSliderCounter, sliderCounter, subarray}) => {
    const {compare} = useTypedSelector(state => state)

    return (
        <>
            {
                compare.length > 1
                    ? (
                        <div className={classes.myCompareAttributesBlock}>
                            <div className={classes.MyCompareAttributesBlockTopSection}>
                                <div className={classes.compareBlockTitle}>
                                    Сравниваемые товары
                                </div>
                                <div className={classes.sliderBlock}>
                                    <MyCompareSlider subarray={subarray} sliderCounter={sliderCounter} setSliderCounter={setSliderCounter}/>
                                </div>
                            </div>
                        </div>
                    ) : (<></>)
            }
        </>
    );
};

export default MyCompareAttributesBlock;