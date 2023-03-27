import React from "react";
import PopularGoods from "../../components/regular_components/Products/PopularGoods/PopularGoods";
import classes from "./Contacts.module.css";
import MapBlock from "../HomePage/map_block/MapBlock";
import form from "./bitrixForm";
const Contacts = () => {
  return (
    <div>
      {/* <div className={classes.formBitrix}>
        <script data-b24-form="inline/71/ab2ds7" data-skip-moving="true">
          {form}
        </script>
      </div> */}
      <MapBlock />
    </div>
  );
};

export default Contacts;
