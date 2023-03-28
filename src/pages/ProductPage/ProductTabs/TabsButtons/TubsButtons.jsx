import React from "react";
import classes from "./TubsButtoons.module.css";
import MyNormalRegularBtn from "../../../../components/UIUX/FontsButtons/Buttons/MyNormalRegularBtn/MyNormalRegularBtn";

const TubsButtons = ({ isActive, changeActiveTab }) => {
  return (
    <div className={classes.tabsButtonsLayout}>
      <MyNormalRegularBtn
        change={changeActiveTab}
        activeTab={isActive[0]}
        tabN={1}
      >
        Описание
      </MyNormalRegularBtn>

      <MyNormalRegularBtn
        change={changeActiveTab}
        activeTab={isActive[1]}
        tabN={2}
      >
        Документация
      </MyNormalRegularBtn>
      <MyNormalRegularBtn
        change={changeActiveTab}
        activeTab={isActive[2]}
        tabN={3}
      >
        Отзывы
      </MyNormalRegularBtn>
    </div>
  );
};

export default TubsButtons;
