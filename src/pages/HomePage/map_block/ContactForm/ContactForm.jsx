import React from "react";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <>
      <div className={classes.ContactFormWrapper}>
        <div className={classes.ContactFormHeader}>Свяжитесь с нами</div>
        <div className={classes.ContactFormHeaderText}>
          Задайте нам любой интересующий вопрос в поле "Текст сообщения"
        </div>
        <div className={classes.ContactFormInputWrapper}>
          <div className={classes.ContactFormInputName}>Имя</div>
          <input
            type="text"
            placeholder="Иван"
            className={classes.ContactFormInput}
          />
        </div>
        <div className={classes.ContactFormInputWrapper}>
          <div className={classes.ContactFormInputName}>Фамилия</div>
          <input
            type="text"
            placeholder="Иванов"
            className={classes.ContactFormInput}
          />
        </div>
        <div className={classes.ContactFormInputWrapper}>
          <div className={classes.ContactFormInputName}>Телефон</div>
          <input
            type="text"
            placeholder="+7 (999) 99-99-999"
            className={classes.ContactFormInput}
          />
        </div>
        <div className={classes.ContactFormInputWrapper}>
          <div className={classes.ContactFormInputName}>Комментарий</div>
          <textarea
            className={classes.ContactFormInputArea}
            placeholder="Текст"
            name=""
            id=""
            cols="40"
            rows="10"
          ></textarea>
        </div>
        <div className={classes.ContactFormInputPersonal}>
          <input type="checkbox" className={classes.ContactFormCheckbox} />
          <div className={classes.ContactFormPersonalText}>
            Нажимая кнопку “Отправить”, я даю свое согласие на обработку моих
            персональных данных, в соответствии с Федеральным законом от
            27.07.2006 года №152-ФЗ “О персональных данных”, на условиях и для
            целей, определенных в Согласии на обработку персональных данных.
          </div>
        </div>
        <button className={classes.ContactFormButton}>Отправить</button>
      </div>
    </>
  );
};

export default ContactForm;
