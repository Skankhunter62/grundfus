import {
  getWCProductBySingleCategory,
  getWCAllProducts,
} from "../../WC_WP_API/CustomHooksAndFunctions/wc_hooks/wc_hooks";

/*if we get all products list, we try to get attributes from this list*/
export const getProductByGoodsList = (
  removeAllProductsAttributes,
  addProducts,
  addProductsAttributes,
  goodsList,
  singleCategory,
  changeLoading
) => {
  removeAllProductsAttributes();
  addProducts(
    goodsList.filter(
      (product) => product.categories[0].slug === singleCategory[0].slug
    )
  );
  addProductsAttributes(
    goodsList.filter(
      (product) => product.categories[0].slug === singleCategory[0].slug
    )
  );
  changeLoading(false);
};
/*if we get category products list, we try to get attributes from this list*/
export const addProductsFromCategoryRequest = (
  singleCategory,
  addProducts,
  addProductsAttributes,
  changeLoading
) => {
  if (singleCategory.length !== 0) {
    getWCProductBySingleCategory(
      singleCategory[0].id,
      addProducts,
      addProductsAttributes,
      changeLoading
    );
  }
};
export const addAllProducts = (
  addProducts,
  stateProps,
  setLoading,
  addProductsAttributes,
  changeLoading
) => {
  getWCAllProducts(
    addProducts,
    stateProps,
    setLoading,
    addProductsAttributes,
    changeLoading
  );
};
