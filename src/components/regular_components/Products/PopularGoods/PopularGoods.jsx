import React, { useState } from "react";
import { useWCPopularGoods } from "../../../../WC_WP_API/CustomHooksAndFunctions/wc_hooks/wc_hooks";
import { titleArray } from "../../../../dataArrays";
import RegularSlider from "../../Sliders/RegularSlider/RegularSlider";
import GridProductCardPopup from "../../../UIUX/MyBlocks/GridProductCard/GridProductCardPopup/GridProductCardPopup";

const PopularGoods = () => {
  const [loader, setLoader] = useState(true);
  const [isShown, setIsShown] = useState(false);
  const [product, setProduct] = useState({});
  const sliderChangePopupState = (product) => {
    setProduct(product);
    setIsShown((current) => !current);
  };
  const loaderCallback = () => setLoader(false);
  const products = useWCPopularGoods(loaderCallback);
  return (
    <React.Fragment>
      {isShown ? (
        <GridProductCardPopup
          product={product}
          changePopupState={sliderChangePopupState}
        />
      ) : null}
      <RegularSlider
        title={titleArray[0].title}
        loader={loader}
        goods={products}
        sliderChangePopupState={sliderChangePopupState}
      />
    </React.Fragment>
  );
};

export default PopularGoods;
