import React, {useState} from 'react';
import classes from './HeaderMiddleSectionSearch.module.css'
import searchIcon from '../../../../../assets/icons/header_icons/main-header__search-icon.svg';

const HeaderMiddleSectionSearch = () => {
    const [search, setSearch] = useState('')
    return (
        <div className={classes.HeaderMiddleSectionSearchBlock}>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Поиск по сайту"
                className={classes.HeaderMiddleSectionSearchInput}
            />
            <div className={classes.HeaderMiddleSectionSearchIconBlock}>
                <img src={searchIcon} className={classes.HeaderMiddleSectionSearchIcon} alt=''/>
            </div>

        </div>
    );
};

export default HeaderMiddleSectionSearch;