import React, { useEffect, useState } from "react";
import classes from "./CalculatorBottomSection.module.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import CalculatorInput from "../CalculatorInput/CalculatorInput";

const CalculatorBottomSection = ({
  radioChange,
  tableDepth,
  tableDistance,
  checkBoxValue,
}) => {
  const [pressure, setPressure] = useState(80);
  const [outputValue, setOutputValue] = useState(8);

  const updatePressure = (pressure) => {
    console.log(
      "pressure: ",
      pressure,
      "tableDepth: ",
      tableDepth,
      "tableDistance: ",
      tableDistance,
      "checkBoxValue: ",
      checkBoxValue
    );
    setPressure(pressure);
    setOutputValue(
      pressure / 10 -
        tableDepth / 10 -
        tableDistance / 100 -
        (checkBoxValue - 1) / 10
    );
    // setPressure(
    //   (inputValue - tableDepth - tableDistance / 10 - (checkBoxValue - 1)) / 10
    // );
  };
  useEffect(() => {
    console.log(
      "pressure: ",
      pressure,
      "tableDepth: ",
      tableDepth,
      "tableDistance: ",
      tableDistance,
      "checkBoxValue: ",
      checkBoxValue
    );
    setOutputValue(
      pressure / 10 -
        tableDepth / 10 -
        tableDistance / 100 -
        (checkBoxValue - 1) / 10
    );
  }, [tableDepth, tableDistance, checkBoxValue]);
  return (
    <>
      <div className={classes.CalculatorBottomSectionWrapper}>
        <div className={classes.CalculatorRadioWrapper}>
          <div className={classes.CalculatorFieldTitle}>
            Ствол скважины прямой / имеет искривления (буровики предупреждают
            всегда)
          </div>
          <div className={classes.CalculatorFormControlWrapper}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="1"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="Прямой"
                  onChange={radioChange}
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="С небольшим искривлением"
                  onChange={radioChange}
                />
                <FormControlLabel
                  value="3"
                  control={<Radio />}
                  label="С сильным искривлением"
                  onChange={radioChange}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className={classes.CalculatorPressureWrapper}>
          <div className={classes.CalculatorField}>
            <div className={classes.CalculatorFieldTitle}>
              Создаваемый напор скважинным насосом по паспорту (метры)
            </div>
            <CalculatorInput type="pressure" updatePressure={updatePressure} />
          </div>
          <div className={classes.CalculatorPressureLabel}>
            {" Расчетное давление воды на самом дальнем приборе в доме " +
              outputValue.toFixed(1) +
              " Бар"}
          </div>
          <div className={classes.CalculatorPressureLabelTip}>
            <span style={{ color: "#FF4822" }}>*</span> Давление воды должно
            быть в значениях 2.5-6 Бар
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatorBottomSection;
