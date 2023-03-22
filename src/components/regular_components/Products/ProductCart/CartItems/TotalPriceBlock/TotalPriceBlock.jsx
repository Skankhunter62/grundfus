import React from "react";
import classes from "./TotalPriceBlock.module.css";
import OrderButtonGetOrder from "../../../../../UIUX/FontsButtons/Buttons/OrderButtonGetOrder/OrderButtonGetOrder";

const TotalPriceBlock = ({
  totalPrice,
  backSetOrderAnswer,
  changeEmptyFields,
  order,
  newOrder,
  setIsOrderVisible,
  changeSetLoading,
}) => {
  return (
    <div className={classes.totalPriceBlock}>
      <div className={classes.totalText}>Итого:</div>
      <div className={classes.totalPriceRightBlock}>
        <div className={classes.totalPrice}>{Math.round(totalPrice)} руб.</div>
        <OrderButtonGetOrder
          changeEmptyFields={changeEmptyFields}
          changeSetLoading={changeSetLoading}
          setIsOrderVisible={setIsOrderVisible}
          backSetOrderAnswer={backSetOrderAnswer}
          newOrder={newOrder}
          order={order}
        >
          Оформить заказ
        </OrderButtonGetOrder>
      </div>
    </div>
  );
};

export default TotalPriceBlock;
