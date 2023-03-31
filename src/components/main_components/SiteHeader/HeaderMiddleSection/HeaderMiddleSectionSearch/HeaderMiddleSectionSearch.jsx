import React, { useState } from "react";
import classes from "./HeaderMiddleSectionSearch.module.css";
import searchIcon from "../../../../../assets/icons/header_icons/main-header__search-icon.svg";
import { useNavigate } from "react-router-dom";

const HeaderMiddleSectionSearch = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const SearchProducts = (event) => {
    event.preventDefault();
    const options = {
      state: {
        fromCalc: false,
        fromSearch: true,
        searchQuery: search,
      },
    };
    navigate("/catalog", options);
  };
  return (
    <div className={classes.HeaderMiddleSectionSearchBlock}>
      <form onSubmit={SearchProducts}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Поиск по сайту"
          className={classes.HeaderMiddleSectionSearchInput}
        />
      </form>
      <div className={classes.HeaderMiddleSectionSearchIconBlock}>
        <img
          src={searchIcon}
          className={classes.HeaderMiddleSectionSearchIcon}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeaderMiddleSectionSearch;
