import React from 'react';
import classes from './CatalogTopMenuSorting.module.css'
import CatalogTopMenuGridSortingSection from "./CatalogTopMenuGridSortingSection/CatalogTopMenuGridSortingSection";
import MySelect from "../../../../components/regular_components/Products/ProductCatalogSorting/MySelect/MySelect";
import {optionsArray} from "../../../../dataArrays";

const CatalogTopMenuSorting = ({changeGrid, grid, selectedSort, setSelectedSort}) => {

    return (
        <div className={classes.sortingSection}>
            <CatalogTopMenuGridSortingSection changeGrid={changeGrid} grid={grid}/>
            <div className={classes.sortingRightSection}>
                Сортировка:
                <MySelect
                    value={selectedSort}
                    onChange={sort => setSelectedSort(sort)}
                    defaultValue='Сортировка'
                    options= {optionsArray}
                />
            </div>
        </div>
    );
};

export default CatalogTopMenuSorting;