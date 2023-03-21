import React, { useState, useEffect } from "react";
import classes from "./CalculatorTable.module.css";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { current } from "@reduxjs/toolkit";

const CalculatorTable = ({
  tableDepth,
  tableDistance,
  tableDebet,
  tableTruba,
  tableStvol,
  updateCheckboxesParent,
  updateMinPressureParent,
}) => {
  const [depth, setPumpDepth] = useState(0);
  const [minDebet, setMinDebet] = useState(0);
  const [maxDebet, setMaxDebet] = useState(0);
  const [maxDiametr, setMaxDiametr] = useState(0);
  const [maxDiametrIn, setMaxDiametrIn] = useState(0);
  const [minPressure, setMinPressure] = useState(50);
  const [recomPressure, setRecomPressure] = useState(35);
  const [checkBoxValue, setCheckBoxValue] = useState(4);

  function decimalAdjust(type, value, exp) {
    if (typeof exp === "undefined" || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
      return NaN;
    }
    value = value.toString().split("e");
    value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
    value = value.toString().split("e");
    return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
  }
  if (!Math.round10) {
    Math.round10 = function (value, exp) {
      return decimalAdjust("round", value, exp);
    };
  }
  function mmToInches(value) {
    return Math.round(value * 0.03937 * 100) / 100;
  }
  const updateCheckboxes = (event) => {
    if (event.target.checked) {
      const newValue = checkBoxValue + 4;
      setCheckBoxValue(newValue);
      updateCheckboxesParent(newValue);
    } else {
      const newValue = checkBoxValue - 4;
      setCheckBoxValue(newValue);
      updateCheckboxesParent(newValue);
    }
  };
  useEffect(() => {
    setPumpDepth(tableDepth + Math.round(tableDistance / 10) + checkBoxValue);
    setMinDebet(Math.round((tableDebet - 0.6) * 100) / 100);
    setMaxDebet(Math.round10(tableDebet * 1.05 * 100, 1) / 100);
    if (tableStvol == 1) {
      setMaxDiametr(tableTruba - 6);
      setMaxDiametrIn(mmToInches(tableTruba));
    } else if (tableStvol == 2) {
      setMaxDiametr(tableTruba - 12);
      setMaxDiametrIn(mmToInches(tableTruba - 12));
    } else {
      setMaxDiametr(tableTruba - 20);
      setMaxDiametrIn(mmToInches(tableTruba - 20));
    }
    setMinPressure(
      tableDepth + 25 + Math.round(tableDistance / 10) + checkBoxValue
    );

    setRecomPressure(
      tableDepth + 25 + Math.round(tableDistance / 10) + 25 + checkBoxValue
    );
  }, [
    tableDepth,
    tableDistance,
    tableDebet,
    tableTruba,
    tableStvol,
    checkBoxValue,
  ]);
  useEffect(() => {
    updateMinPressureParent(Math.floor(Number(minPressure / 10)));
  }, [minPressure]);
  return (
    <>
      <div className={classes.Wrapper}>
        <div className={classes.Checkbox}>
          <div className={classes.CalculatorFieldTitle}>
            Водоразбор на этажах
          </div>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox defaultChecked={true} onChange={updateCheckboxes} />
              }
              label="1-й этаж"
            />
            <FormControlLabel
              control={<Checkbox onChange={updateCheckboxes} />}
              label="2-й этаж"
            />
            <FormControlLabel
              control={<Checkbox onChange={updateCheckboxes} />}
              label="3-й этаж"
            />
            <FormControlLabel
              control={<Checkbox onChange={updateCheckboxes} />}
              label="4-й этаж"
            />
          </FormGroup>
        </div>
        <div className={classes.TableWrapper}>
          <table className={classes.Table}>
            <tr>
              <td>Потери напора (метры)</td>
              <td>{depth}</td>
            </tr>
            <tr>
              <td>Максимальный диаметр насоса (мм)</td>
              <td>{maxDiametr}</td>
            </tr>
            <tr>
              <td>Максимальный диаметр насоса (дюймы)</td>
              <td>{maxDiametrIn}</td>
            </tr>
            <tr>
              <td>Минимальный напор насоса (метры)</td>
              <td>{minPressure}</td>
            </tr>
            <tr>
              <td>Рекомендуемый напор насоса (метры)</td>
              <td>{recomPressure}</td>
            </tr>
            <tr>
              <td>Минимальный дебет насоса</td>
              <td>{minDebet + " м3/час"}</td>
            </tr>
            <tr>
              <td>Максимальный дебет насоса</td>
              <td>{maxDebet + " м3/час"}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default CalculatorTable;
