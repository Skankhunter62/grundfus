import React from "react";
import classes from "./FooterRight.module.css";
import { Link } from "react-router-dom";

const FooterRight = () => {
  return (
    <div className={classes.right_footer}>
      <div className={classes.right_footer_links}>
        <div className={classes.lists_sections}>
          <div className={classes.list_title}>Информация</div>
          <div className={classes.link_list_block}>
            <Link
              className={classes.list_link_element}
              to={"catalog/cirkulyacionnye"}
            >
              Циркуляционные насосы
            </Link>
            <Link
              className={classes.list_link_element}
              to={"catalog/komplektuyushchie"}
            >
              Комплектующие
            </Link>
            <Link className={classes.list_link_element} to={"catalog/fekalnye"}>
              Фекальные насосы
            </Link>
            <Link
              className={classes.list_link_element}
              to={"catalog/drenajnie"}
            >
              Дренажные насосы
            </Link>
            <Link
              className={classes.list_link_element}
              to={"catalog/nasosnye-stancii"}
            >
              Насосные станции
            </Link>
            <Link
              className={classes.list_link_element}
              to={"catalog/promyshlennye"}
            >
              Промышленные насосы
            </Link>
          </div>
        </div>
        <div className={classes.lists_sections}>
          <div className={classes.list_title}>Пользователю</div>
          <div className={classes.link_list_block}>
            <Link to="/dostavka" className={classes.list_link_element}>
              Доставка
            </Link>
            <Link className={classes.list_link_element} to={"/payment"}>
              Оплата
            </Link>
            <Link className={classes.list_link_element} to={"/calculator"}>
              Калькулятор подбора насоса
            </Link>
            <Link className={classes.list_link_element} to={"/contacts"}>
              Осторожно
            </Link>
            <Link className={classes.list_link_element} to={"/contacts"}>
              Контакты
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.polisy}>Политика конфиденциальности</div>
    </div>
  );
};

export default FooterRight;
