import React from "react";
import classes from "./MapBlock.module.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactsBlock from "./ContactsBlock/ContactsBlock";
const MapBlock = () => {
  return (
    <>
      <div className={classes.map_block_wrapper}>
        {/*Кастомная форма обратной связи*/}
        {/* <div className={classes.main_container}>
          <div className={classes.form_block}>
            <ContactForm />
          </div>
          <div className={classes.contacts}>
            <ContactsBlock />
          </div>
        </div> */}
        <div className={classes.main_map_styles}>
          <iframe
            title="This is a unique title"
            src="https://yandex.ru/map-widget/v1/-/CCUfYKSnoA"
            className={classes.map_iframe}
          />
        </div>
      </div>
    </>
  );
};

export default MapBlock;
