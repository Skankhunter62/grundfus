import React, { useState, useEffect, useLayoutEffect } from "react";
import classes from "./MapBlock.module.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactsBlock from "./ContactsBlock/ContactsBlock";

const MapBlock = () => {
  function getForm(w, d, u) {
    var s = d.createElement("script");
    s.async = true;
    s.src = u + "?" + ((Date.now() / 180000) | 0);
    var h = d.getElementsByTagName("script")[0];
    h.parentNode.insertBefore(s, h);
  }

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
        <div className={classes.form_block_bitrix}>
          <script data-b24-form="inline/71/ab2ds7" data-skip-moving="true">
            {getForm(
              window,
              document,
              "https://cdn-ru.bitrix24.ru/b12156932/crm/form/loader_71.js"
            )}
          </script>
        </div>
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
