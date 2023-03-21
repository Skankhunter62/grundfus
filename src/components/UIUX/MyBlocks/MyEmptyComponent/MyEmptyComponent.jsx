import React from 'react';
import classes from './MyEmptyComponent.module.css'
import MyNormalRegularBtn from "../../FontsButtons/Buttons/MyNormalRegularBtn/MyNormalRegularBtn";
import CatalogOrderEmptyButton from "../../FontsButtons/Buttons/CatalogOrderEmptyButton/CatalogOrderEmptyButton";

const MyEmptyComponent = ({pageTitle}) => {
    return (
        <div className={classes.emptyPageBlock}>
            <div className={classes.emptyPageBlockSection}>
                <div className={classes.emptyPageBlockSectionTitle}>{pageTitle}</div>
                <div className={classes.emptyPageBlockSectionText}>Посмотрите предложения на главной странице, воспользуйтесь каталогом или поиском</div>
                <div className={classes.emptyPageButtonsBlock}>
                    <MyNormalRegularBtn>На главную</MyNormalRegularBtn>
                    <CatalogOrderEmptyButton link='/catalog'>Перейти в каталог</CatalogOrderEmptyButton>
                </div>
            </div>
        </div>
    );
};

export default MyEmptyComponent;