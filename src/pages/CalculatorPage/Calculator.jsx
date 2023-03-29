import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "./Calculator.module.css";
import CalculatorInput from "./CalculatorInput/CalculatorInput";
import CalculatorSlider from "./CalculatorSlider/CalculatorSlider";
import CalculatorTable from "./CalculatorTable/CalculatorTable";
import CalculatorImage from "../../assets/img/Calculator.jpg";
import CalculatorBottomSection from "./CalculatorBottomSection/CalculatorBottomSection";
import { useWCProductByAllCategories } from "../../WC_WP_API/CustomHooksAndFunctions/wc_hooks/wc_hooks";
const Calculator = () => {
  const navigate = useNavigate();

  const [tableDepth, setTableDepth] = useState(20);
  const [tableDistance, setTableDistance] = useState(10);
  const [tableDebet, setTableDebet] = useState(5);
  const [tableTruba, setTableTruba] = useState(125);
  const [tableStvol, setTableStvol] = useState(1);
  const [checkBoxValue, setCheckBoxValue] = useState(4);
  const [minPressure, setMinPressure] = useState(5);

  const updateMinPressureParent = (minPressure) => {
    setMinPressure(minPressure);
  };

  const updateCheckboxesParent = (checkBoxValue) => {
    setCheckBoxValue(checkBoxValue);
  };
  const updateDepth = (tableDepth) => {
    setTableDepth(tableDepth);
  };
  const updateDistance = (tableDistance) => {
    setTableDistance(tableDistance);
  };
  const updateDebet = (event, tableDebet) => {
    setTableDebet(tableDebet);
  };
  const updateTruba = (event, tableTruba) => {
    setTableTruba(tableTruba);
  };

  const radioChange = (event) => {
    if (event.target.value == "1") {
      setTableStvol(1);
    } else if (event.target.value == "2") {
      setTableStvol(2);
    } else {
      setTableStvol(3);
    }
  };

  return (
    <div>
      <div className={classes.main_container}>
        <div className={classes.CalculatorPageTitle}>
          Калькулятор расчёта скважинного насоса
        </div>
        <div className={classes.CalculatorPageWrapper}>
          <img
            src={CalculatorImage}
            alt="Калькулятор расчёта скважинного насоса"
            className={classes.CalculatorImage}
          />
          <div className={classes.CalculatorField}>
            <div className={classes.CalculatorFieldTitle}>
              Глубина установки насоса
            </div>
            <CalculatorInput updateDepth={updateDepth} type={"pump"} />
          </div>
          <div className={classes.CalculatorField}>
            <div className={classes.CalculatorFieldTitle}>
              Расстояние от скважины до дома (+-5 метров)
            </div>
            <CalculatorInput
              updateDistance={updateDistance}
              type={"distance"}
            />
          </div>
          <div className={classes.CalculatorSlider}>
            <div className={classes.CalculatorFieldTitle}>
              Дебет скважины м3/час (смотреть в паспорте скважины)
            </div>
            <CalculatorSlider
              valueLabelDisplay="on"
              marks={[
                { value: 0, label: 0 },
                { value: 10, label: 10 },
              ]}
              min={0}
              max={10}
              step={0.1}
              defaultValue={5}
              onChange={updateDebet}
            />
          </div>
          <div className={classes.CalculatorSlider}>
            <div className={classes.CalculatorFieldTitle}>
              Внутренней диаметр обсадной трубы скважины (мм)
            </div>
            <CalculatorSlider
              valueLabelDisplay="on"
              marks={[
                { value: 50, label: 50 },
                { value: 200, label: 200 },
              ]}
              min={50}
              max={200}
              defaultValue={125}
              onChange={updateTruba}
            />
          </div>
          <div className={classes.CalculatorTable}>
            <CalculatorTable
              tableDepth={tableDepth}
              tableDistance={tableDistance}
              tableDebet={tableDebet}
              tableTruba={tableTruba}
              tableStvol={tableStvol}
              updateCheckboxesParent={updateCheckboxesParent}
              updateMinPressureParent={updateMinPressureParent}
            />
          </div>
          <CalculatorBottomSection
            radioChange={radioChange}
            tableDepth={tableDepth}
            tableDistance={tableDistance}
            checkBoxValue={checkBoxValue}
          />
          <Link
            to={"/catalog"}
            state={{ fromCalc: true, pressure: minPressure }}
          >
            <button className={classes.CalculatorButton}>
              Рекомендовать насосы
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
