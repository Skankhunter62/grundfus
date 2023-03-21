import React from 'react';
import CatalogSubCategories from "./CatalogSubCategories/CatalogSubCategories";
import CatalogTopMenuSorting from "./CatalogTopMenuSorting/CatalogTopMenuSorting";

const CatalogTopMenu = ({changeGrid, grid, selectedSort, setSelectedSort}) => {
    return (
        <div>
            <CatalogSubCategories/>
            <CatalogTopMenuSorting selectedSort={selectedSort} setSelectedSort={setSelectedSort} changeGrid={changeGrid} grid={grid}/>
        </div>
    );
};

export default CatalogTopMenu;