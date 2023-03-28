import React, { useEffect } from "react";
import classes from "./MyPagination.module.css";
import prev_arrow from "../../../../assets/icons/pagination_arrows/left_arrow.svg";
import next_arrow from "../../../../assets/icons/pagination_arrows/right_arrow.svg";
import { useTypedSelector } from "../../../../store/hooks/useTypedSelector";

const MyPagination = ({ nPages, currentPage, setCurrentPage }) => {
  const { singleCategory } = useTypedSelector((state) => state);
  useEffect(() => {
    setCurrentPage(1);
  }, [singleCategory]);

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage !== 1) {
      // if (currentPage !== nPages && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <ul className={classes.paginationBlock}>
      <li className={classes.arrowStyle}>
        {" "}
        <img src={prev_arrow} alt="" onClick={prevPage} />{" "}
      </li>
      {pageNumbers.map((pgNumber) => (
        <li
          key={pgNumber}
          onClick={() => setCurrentPage(pgNumber)}
          className={
            pgNumber === currentPage
              ? classes.activePaginationPage
              : classes.singlePaginationPage
          }
        >
          {pgNumber}
        </li>
      ))}
      <li className={classes.arrowStyle}>
        {" "}
        <img src={next_arrow} alt="" onClick={nextPage} />{" "}
      </li>
    </ul>
  );
};

export default MyPagination;
