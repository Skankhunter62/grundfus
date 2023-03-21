import { attributesDefaultList } from "../../WC_WP_API/local_db/local_db";

export const getProductsByCalcOption = (
  calcAttributes,
  productsList,
  temporaryArrayOfProducts,
  setTemporaryArrayOfProducts,
  changeEmptyFlag
) => {
  if (productsList.length !== 0 && calcAttributes.length !== 0) {
    let middleArrayIfTemporaryEmpty = [];
    productsList.map((product) => {
      product?.attributes.map((attribute) => {
        if (
          attribute.name === calcAttributes.attrName &&
          Number(attribute.options) >= Number(calcAttributes.option)
        ) {
          middleArrayIfTemporaryEmpty.push(product);
        } else {
          setTemporaryArrayOfProducts(middleArrayIfTemporaryEmpty);
        }
      });
    });
    setTemporaryArrayOfProducts(middleArrayIfTemporaryEmpty);
  }
};

export const getProductsByFilterOption = (
  activeAttributes,
  productsList,
  temporaryArrayOfProducts,
  setTemporaryArrayOfProducts,
  changeEmptyFlag
) => {
  /*main if else function which check is*/
  if (productsList.length !== 0 && activeAttributes.length !== 0) {
    if (activeAttributes.length < 2) {
      let middleArrayIfTemporaryEmpty = [];
      productsList.map((product) => {
        product?.attributes.map((attribute) => {
          if (
            attribute.name ===
              activeAttributes[activeAttributes.length - 1].attrName &&
            attribute.options
              .map((option) => option)
              .includes(activeAttributes[activeAttributes.length - 1].option)
          ) {
            middleArrayIfTemporaryEmpty.push(product);
          }
        });
      });
      setTemporaryArrayOfProducts(middleArrayIfTemporaryEmpty);
    } else if (
      activeAttributes[activeAttributes.length - 1].attrName ===
      activeAttributes[0].attrName
    ) {
      let middleArrayIfSameActive = [];
      productsList.map((product) => {
        product?.attributes.map((attribute) => {
          if (
            attribute.name ===
              activeAttributes[activeAttributes.length - 1].attrName &&
            attribute.options
              .map((option) => option)
              .includes(activeAttributes[activeAttributes.length - 1].option)
          ) {
            middleArrayIfSameActive.push(product);
          }
        });
      });
      setTemporaryArrayOfProducts((prev) => [
        ...prev,
        ...middleArrayIfSameActive,
      ]);
    } else {
      let middleArrayIfDifferentActive = [];
      temporaryArrayOfProducts.map((product) => {
        product?.attributes.map((attribute) => {
          if (
            attribute.name ===
              activeAttributes[activeAttributes.length - 1].attrName &&
            attribute.options
              .map((option) => option)
              .includes(activeAttributes[activeAttributes.length - 1].option)
          ) {
            middleArrayIfDifferentActive.push(product);
          }
        });
      });
      if (middleArrayIfDifferentActive.length !== 0) {
        setTemporaryArrayOfProducts(middleArrayIfDifferentActive);
      } else {
        setTemporaryArrayOfProducts([]);
        changeEmptyFlag();
      }
    }
  }
};
/*push attributes options from product list to default list*/
export const getAttributesToDefaultList = (productAttributes, setLoading) => {
  /*zeroing options list when single category is change*/
  attributesDefaultList.map(
    (defaultAttribute) => (defaultAttribute.options.length = 0)
  );
  /*check is product attributes list are not empty (we get options when get products from host)*/
  if (productAttributes.length !== 0) {
    /*loop from product attributes list*/
    productAttributes.map((productAttribute) => {
      /*loop from product attributes default list*/
      attributesDefaultList.map((defaultAttribute) => {
        /*check is items from product attributes list similar with items from default attribute list */
        if (
          productAttribute?.name === defaultAttribute?.name &&
          !defaultAttribute?.options.includes(...productAttribute.options)
        ) {
          /*push unique option to default list*/
          defaultAttribute.options.push(...productAttribute.options);
        }
      });
    });
    /*when attributes are ready change flag*/
    setLoading(false);
  }
};
