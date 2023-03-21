import React from 'react';
import CatalogOrderEmptyButton from "../../UIUX/FontsButtons/Buttons/CatalogOrderEmptyButton/CatalogOrderEmptyButton";
import ProductCardAddToCardButton from "../../UIUX/FontsButtons/Buttons/ProductCardAddToCardButton/ProductCardAddToCardButton";
import ProductPageTabsAndUpSallesButton
    from "../../UIUX/FontsButtons/Buttons/ProductPageTabsAndUpSallesButton/ProductPageTabsAndUpSallesButton";
import PostsPagesTitle from "../../UIUX/FontsButtons/Titles/PostsPagesTitle/PostsPagesTitle";
import ProductTitleFilterAttributeTitle
    from "../../UIUX/FontsButtons/Titles/ProductTitleFilterAttributeTitle/ProductTitleFilterAttributeTitle";

const Test = () => {
    return (
        <div>
            {/*<CatalogOrderEmptyButton>Оформить заказ</CatalogOrderEmptyButton>*/}
            {/*<CatalogOrderEmptyButton empty={true}>В каталог</CatalogOrderEmptyButton>*/}
            {/*<CatalogOrderEmptyButton>Перейти в каталог</CatalogOrderEmptyButton>*/}

            {/*<ProductCardAddToCardButton>В корзину</ProductCardAddToCardButton>*/}
            {/*<ProductCardAddToCardButton isCatalog={true}>В корзину</ProductCardAddToCardButton>*/}
            {/*<ProductCardAddToCardButton isCatalog={true}>Купить в 1 клик</ProductCardAddToCardButton>*/}

            {/*<ProductPageTabsAndUpSallesButton>Похожие</ProductPageTabsAndUpSallesButton>*/}
            {/*<ProductPageTabsAndUpSallesButton isActive={false}>Комплектующие</ProductPageTabsAndUpSallesButton>*/}
            {/*<ProductPageTabsAndUpSallesButton isTabs={true}>Описание</ProductPageTabsAndUpSallesButton>*/}
            {/*<ProductPageTabsAndUpSallesButton isTabs={true} isActive={false}>Документация</ProductPageTabsAndUpSallesButton>*/}

            <PostsPagesTitle>Новинки</PostsPagesTitle>
            <PostsPagesTitle isPageTitle={true}>Избранное</PostsPagesTitle>

            <ProductTitleFilterAttributeTitle>Циркуляционный насос</ProductTitleFilterAttributeTitle>
            <ProductTitleFilterAttributeTitle isProduct={false}>Напряжение сети</ProductTitleFilterAttributeTitle>
        </div>
    );
};

export default Test;