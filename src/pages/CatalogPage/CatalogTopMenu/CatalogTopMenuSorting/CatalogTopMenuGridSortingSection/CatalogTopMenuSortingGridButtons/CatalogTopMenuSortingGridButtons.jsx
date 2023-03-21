import React from 'react';
import classes from './CatalogTopMenuSortingGridButtons.module.css'
import {ReactComponent as ActiveList} from "../../../../../../assets/icons/catalog/active_list.svg";
import {ReactComponent as ListBtn} from "../../../../../../assets/icons/catalog/row-layout.svg";
import {ReactComponent as ActiveGrid} from "../../../../../../assets/icons/catalog/active_grid.svg";
import {ReactComponent as GridBtn} from "../../../../../../assets/icons/catalog/grid-layout.svg";

const CatalogTopMenuSortingGridButtons = ({changeGrid, grid}) => {
    return (
        <div className={classes.catalogTopMenuSortingGridButtons}>
            <div onClick={()=>changeGrid(false)} className={!grid ? classes.catalogChangeGridButtonActive : classes.catalogChangeGridButtonDisable}>
                { !grid ? <ActiveList /> : <ListBtn/> }
            </div>
            <div onClick={()=>changeGrid(true)} className={grid ? classes.catalogChangeGridButtonActive : classes.catalogChangeGridButtonDisable}>
                { grid ? <ActiveGrid /> : <GridBtn/> }
            </div>
        </div>
    );
};

export default CatalogTopMenuSortingGridButtons;