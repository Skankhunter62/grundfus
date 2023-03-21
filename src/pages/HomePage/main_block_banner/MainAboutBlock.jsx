import React, {useState} from 'react';
import AboutBannerList from "./about_banner_block/AboutBannerList";
import classes from './MainAboutBlock.module.css'
import AboutBannerInfo from "./about_banner_info/AboutBannerInfo";
import {titleArray, bannerElement} from "../../../dataArrays";

const MainAboutBlock = () => {


    const [cell, setCell] = useState([bannerElement[0]])
    const buttonChangeElementPrev = () => {
        let newID = bannerElement.length - 1
        let prevID = cell[0].id - 2
        cell[0].id === 1
            ? setCell([bannerElement[newID]])
            : setCell([bannerElement[prevID]])
    }
    const buttonChangeElementNext = () => {
        let newID = cell[0].id
        cell[0].id === bannerElement.length
            ? setCell([bannerElement[0]])
            : setCell([bannerElement[newID]])
    }

    const selectElement = (selectedCell) => {
        setCell([selectedCell])
    }

    return (
        <div className={classes.main_about_banner_section}>
            <h2 className={classes.main_about_banner_title}>{titleArray[1].title}</h2>
            <div className={classes.main_about_banner}>
                <AboutBannerList banner={bannerElement} selectElement={selectElement} cell={cell}/>
                <AboutBannerInfo
                    banner={cell}
                    buttonClickPrev ={buttonChangeElementPrev}
                    buttonClickNext ={buttonChangeElementNext}
                />
            </div>
        </div>
    );
};

export default MainAboutBlock;