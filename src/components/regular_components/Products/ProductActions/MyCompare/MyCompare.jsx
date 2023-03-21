import React, { useEffect } from "react";
import classes from "./MyCompare.module.css";
import { useActions } from "../../../../../store/hooks/useActions";
import { useTypedSelector } from "../../../../../store/hooks/useTypedSelector";
import active_compare from "../../../../../assets/icons/actions/compare-icon-active.svg";
import compare_icon from "../../../../../assets/icons/actions/compare-icon-default.svg";
import { Link } from "react-router-dom";

const MyCompare = ({
  product = { id: 0 },
  extended = false,
  headerIcon = false,
}) => {
  const { comparelistAddItem, comparelistRemoveItem } = useActions();
  const { compare } = useTypedSelector((state) => state);
  useEffect(() => {
    localStorage.setItem("compare", JSON.stringify(compare));
  }, [compare]);
  const isExistsInComparelist = compare.some((p) => p.id === product.id);

  return (
    <>
      {headerIcon ? (
        <Link to="/compare" className={classes.compareBlockPosition}>
          <svg
            className={classes.actionButton}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 5.54H14.46V1C14.46 0.734784 14.3546 0.48043 14.1671 0.292893C13.9796 0.105357 13.7252 0 13.46 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13.46C0 13.7252 0.105357 13.9796 0.292893 14.1671C0.48043 14.3546 0.734784 14.46 1 14.46H5.54V19C5.54 19.2652 5.64536 19.5196 5.83289 19.7071C6.02043 19.8946 6.27478 20 6.54 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V6.54C20 6.27478 19.8946 6.02043 19.7071 5.83289C19.5196 5.64536 19.2652 5.54 19 5.54ZM18 18H7.54V13.46C7.54 13.1948 7.43464 12.9404 7.24711 12.7529C7.05957 12.5654 6.80522 12.46 6.54 12.46H2V2H12.46V6.54C12.46 6.80522 12.5654 7.05957 12.7529 7.24711C12.9404 7.43464 13.1948 7.54 13.46 7.54H18V18Z"
              fill="#003767"
            />
          </svg>

          {/* <img
            src={compare_icon}
            alt="Сравнение"
            className={classes.actionButton}
          /> */}
          <span className={classes.countSpan}>{compare.length}</span>
        </Link>
      ) : (
        <div
          className={classes.compareBlock}
          onClick={() => {
            isExistsInComparelist
              ? comparelistRemoveItem(product)
              : comparelistAddItem(product);
          }}
        >
          {/* <img
            src={isExistsInComparelist ? active_compare : compare_icon}
            alt="Сравнение"
          /> */}
          <div className={classes.circleIcon}>
            <svg
              width="19"
              height="19"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {!isExistsInComparelist ? (
                <path
                  d="M19 5.54H14.46V1C14.46 0.734784 14.3546 0.48043 14.1671 0.292893C13.9796 0.105357 13.7252 0 13.46 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13.46C0 13.7252 0.105357 13.9796 0.292893 14.1671C0.48043 14.3546 0.734784 14.46 1 14.46H5.54V19C5.54 19.2652 5.64536 19.5196 5.83289 19.7071C6.02043 19.8946 6.27478 20 6.54 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V6.54C20 6.27478 19.8946 6.02043 19.7071 5.83289C19.5196 5.64536 19.2652 5.54 19 5.54ZM18 18H7.54V13.46C7.54 13.1948 7.43464 12.9404 7.24711 12.7529C7.05957 12.5654 6.80522 12.46 6.54 12.46H2V2H12.46V6.54C12.46 6.80522 12.5654 7.05957 12.7529 7.24711C12.9404 7.43464 13.1948 7.54 13.46 7.54H18V18Z"
                  fill="#003767"
                />
              ) : (
                <>
                  <path
                    d="M18 18.5H7.54V13.96C7.54 13.6948 7.43464 13.4404 7.24711 13.2529C7.05957 13.0654 6.80522 12.96 6.54 12.96H2V2.5H12.46V7.04C12.46 7.30522 12.5654 7.55957 12.7529 7.74711C12.9404 7.93464 13.1948 8.04 13.46 8.04H18V18.5Z"
                    fill="#FF4822"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 6.04H14.46V1.5C14.46 1.23478 14.3546 0.98043 14.1671 0.792893C13.9796 0.605357 13.7252 0.5 13.46 0.5H1C0.734784 0.5 0.48043 0.605357 0.292893 0.792893C0.105357 0.98043 0 1.23478 0 1.5V13.96C0 14.2252 0.105357 14.4796 0.292893 14.6671C0.48043 14.8546 0.734784 14.96 1 14.96H5.54V19.5C5.54 19.7652 5.64536 20.0196 5.83289 20.2071C6.02043 20.3946 6.27478 20.5 6.54 20.5H19C19.2652 20.5 19.5196 20.3946 19.7071 20.2071C19.8946 20.0196 20 19.7652 20 19.5V7.04C20 6.77478 19.8946 6.52043 19.7071 6.33289C19.5196 6.14536 19.2652 6.04 19 6.04ZM7.54 18.5H18V8.04H13.46C13.1948 8.04 12.9404 7.93464 12.7529 7.74711C12.5654 7.55957 12.46 7.30522 12.46 7.04V2.5H2V12.96H6.54C6.80522 12.96 7.05957 13.0654 7.24711 13.2529C7.43464 13.4404 7.54 13.6948 7.54 13.96V18.5Z"
                    fill="#FF4822"
                  />
                </>
              )}
            </svg>
          </div>
          {extended ? "Сравнить" : ""}
        </div>
      )}
    </>
  );
};

export default MyCompare;
