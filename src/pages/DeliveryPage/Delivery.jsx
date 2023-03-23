import React from "react";
import classes from "./Delivery.module.css";
import DeliveryTopPost from "./DeliveryTopPost/DeliveryTopPost";
import DeliveryMiddlePost from "./DeliveryMiddle/DeliveryMiddlePost";
import DeliveryBottom from "./DeliveryBottom/DeliveryBottom";
import PopularGoods from "../../components/regular_components/Products/PopularGoods/PopularGoods";
import { Helmet } from "react-helmet";

const Delivery = () => {
  return (
    <div>
      <div className={classes.main_container}>
        <Helmet>
          <title>Способы доставки | Grundfos-Moscow.ru</title>
          <meta name="theme-color" content="#FFFFFF" />
          <meta
            property="og:title"
            content="Способы доставки | Grundfos-Moscow.ru"
          />
          <meta
            name="description"
            content="Как получить заказ и какие документы для этого нужны."
          />
          <meta
            property="og:description"
            content="Как получить заказ и какие документы для этого нужны."
          />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://rusgetter.store/dostavka" />
        </Helmet>
        <DeliveryTopPost />
        <DeliveryMiddlePost />
        <DeliveryBottom />
        <PopularGoods />
      </div>
    </div>
  );
};

export default Delivery;
