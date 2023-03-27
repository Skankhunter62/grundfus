import React from "react";
import PopularGoods from "../../components/regular_components/Products/PopularGoods/PopularGoods";
import classes from "./Contacts.module.css";
import MapBlock from "../HomePage/map_block/MapBlock";

const Contacts = () => {
  return (
    <div>
      {<MapBlock />}
      <script data-b24-form="inline/71/ab2ds7" data-skip-moving="true">
        {() => {
          (function (w, d, u) {
            var s = d.createElement("script");
            s.async = true;
            s.src = u + "?" + ((Date.now() / 180000) | 0);
            var h = d.getElementsByTagName("script")[0];
            h.parentNode.insertBefore(s, h);
          })(
            window,
            document,
            "https://cdn-ru.bitrix24.ru/b12156932/crm/form/loader_71.js"
          );
        }}
      </script>

      {() => {
        (function (w, d, u) {
          var s = d.createElement("script");
          s.async = true;
          s.src = u + "?" + ((Date.now() / 60000) | 0);
          var h = d.getElementsByTagName("script")[0];
          h.parentNode.insertBefore(s, h);
        })(
          window,
          document,
          "https://cdn-ru.bitrix24.ru/b12156932/crm/site_button/loader_43_i3k1yw.js"
        );
      }}
    </div>
  );
};

export default Contacts;
