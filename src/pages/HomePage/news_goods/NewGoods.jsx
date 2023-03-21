import React, { useState } from "react";
import { titleArray } from "../../../dataArrays";
import { useNewGoods } from "../../../WC_WP_API/CustomHooksAndFunctions/wc_hooks/wc_hooks";
import RegularSlider from "../../../components/regular_components/Sliders/RegularSlider/RegularSlider";
import GridProductCardPopup from "../../../components/UIUX/MyBlocks/GridProductCard/GridProductCardPopup/GridProductCardPopup";

const NewGoods = () => {
  const [loader, setLoader] = useState(true);
  const loaderCallback = () => setLoader(false);
  const products = useNewGoods(loaderCallback);
  const [isShown, setIsShown] = useState(false);
  const [product, setProduct] = useState({});
  const sliderChangePopupState = (product) => {
    setProduct(product);
    setIsShown((current) => !current);
  };
  return (
    <>
      {isShown ? (
        <GridProductCardPopup
          product={product}
          changePopupState={sliderChangePopupState}
        />
      ) : null}
      <div>
        <RegularSlider
          title={titleArray[2].title}
          loader={loader}
          goods={products}
          sliderChangePopupState={sliderChangePopupState}
        />
      </div>
    </>
  );
};

export default NewGoods;
