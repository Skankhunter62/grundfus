import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import catalogIcon from "../../../../../../assets/icons/header_icons/top-header__catalog-icon.svg";
import classes from "./HeaderMiddleSectionCatalog.module.css";
import { useTypedSelector } from "../../../../../../store/hooks/useTypedSelector";

const HeaderMiddleSectionMenuCatalog = ({
  children,
  link,
  isMobile,
  changeNavbarState,
}) => {
  const [isShown, setIsShown] = useState(false);
  const { categories } = useTypedSelector((state) => state);
  return !isMobile ? (
    <div
      // to={link}
      className={classes.myHeaderMenuSingleLinkActive}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <img src={catalogIcon} className={classes.img} />
      {children}

      {isShown && (
        <ul className={classes.myHeaderMenuSubmenu}>
          {categories.map((category) =>
            category.parent === 0 ? (
              <Link to={`/catalog/${category.slug}`} key={category.id}>
                <li key={Math.random()}> {category.name}</li>
              </Link>
            ) : (
              <React.Fragment key={Math.random()} />
            )
          )}
        </ul>
      )}
    </div>
  ) : (
    <Link
      to={"/catalog"}
      className={classes.myHeaderMenuSingleLinkActive}
      onClick={changeNavbarState}
    >
      {children}
    </Link>
  );
};

export default HeaderMiddleSectionMenuCatalog;
