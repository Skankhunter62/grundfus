import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Layout from "./router_layout/Layout/Layout";
import Delivery from "./pages/DeliveryPage/Delivery";
import Contacts from "./pages/ContactsPage/Contacts";
import ProductPage from "./pages/ProductPage/ProductPage";
import Calculator from "./pages/CalculatorPage/Calculator";
import ProductCatalog from "./pages/CatalogPage/ProductCatalog";
import ProductLayout from "./router_layout/ProductLayout/ProductLayout";
import Error from "./pages/ErrorPage/Error";
import CatalogLayout from "./router_layout/CatalogLayout/CatalogLayout";
import WishListLayout from "./router_layout/ActionsLayout/WishListlayout/WishListLayout";
import CartLayout from "./router_layout/ActionsLayout/CartLayout/CartLayout";
import CompareLayout from "./router_layout/ActionsLayout/CompareLayout/CompareLayout";
import { useWCCategoriesList } from "./WC_WP_API/CustomHooksAndFunctions/wc_hooks/wc_hooks";
import Payment from "./pages/PaymentPage/Payment";
import Test from "./components/regular_components/Test/Test";

function App() {
  /*get products categories*/
  useWCCategoriesList();

  return (
    <div className="App">
      <Routes>
        <Route path="/" state={{ rus: "Главная" }} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="dostavka" element={<Delivery />} breadcrumb="Доставка" />
          <Route path="contacts" element={<Contacts />} />
          <Route path="wishlist" element={<WishListLayout />} />
          <Route path="payment" element={<Payment />} />
          <Route path="compare" element={<CompareLayout />} />
          <Route path="cart" element={<CartLayout />} />
          <Route path="calculator" element={<Calculator />} />
        </Route>
        <Route path="/catalog" element={<CatalogLayout />}>
          <Route index element={<ProductCatalog />} />
          <Route path=":category_slug" element={<ProductCatalog />} />
        </Route>
        <Route path="/catalog/:category_slug/:slug" element={<ProductLayout />}>
          <Route index element={<ProductPage />} />
        </Route>
        <Route path="*" element={<Error />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
