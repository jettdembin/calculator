import React, { useContext } from "react";
import "./GoalOptions.css";
import { StateContext } from "./contexts/StateContext";
import { AdjustmentContext } from "./contexts/AdjustmentContext";

function GoalBtn(props) {
  const {
    toggleGoal,
    weight,
    updateCal,
    updateAll,
    handleStoredPercent,
    isInitialLoad,
    handleMacro,
    handleStoredTotal,
    setInitialLoad,
  } = useContext(StateContext);

  const { firstAdjustment, toggleIsAdjusted, toggleIsFirstAdjustment } =
    useContext(AdjustmentContext);

  let id = props.id;

  let carb = Math.round(
    (props.id * Number(weight) * (props.percentCarb / 10)) / 4
  );
  let carbLoaded = () => {
    if (
      JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Weight"] ===
      null
    ) {
      return 0;
    } else {
      Math.round(
        (props.id *
          JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Weight"] *
          (props.percentCarb / 10)) /
          4
      );
    }
  };

  let protein = Math.round(
    (props.id * Number(weight) * (props.percentProtein / 10)) / 4
  );
  let proteinLoaded = () => {
    if (
      JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Weight"] ===
      null
    ) {
      return 0;
    } else {
      Math.round(
        (props.id *
          JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Weight"] *
          (props.percentProtein / 10)) /
          4
      );
    }
  };

  let fat = Math.round(
    (props.id * Number(weight) * (props.percentFat / 10)) / 9
  );
  let fatLoaded = () => {
    if (
      JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Weight"] ===
      null
    ) {
      return 0;
    } else {
      Math.round(
        (props.id *
          JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Weight"] *
          (props.percentFat / 10)) /
          9
      );
    }
  };

  let weightLoaded = () => {
    if (
      JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Weight"] ===
      null
    ) {
      return 0;
    } else {
      return JSON.parse(window.localStorage.getItem("storedTotals"))[0][
        "Weight"
      ];
    }
  };

  //percents loaded from storage or not
  let percentCarb = props.percentCarb * 10;
  let percentProtein = props.percentProtein * 10;
  let percentFat = props.percentProtein * 10;

  return (
    <button
      className="Goal-btn"
      onClick={() => {
        toggleGoal(id);
        //dependant upon props.id of btn and weight state that is updated by user upon enter of weightform
        updateCal(id);

        updateAll(carb, "carb");
        updateAll(protein, "protein");
        updateAll(fat, "fat");

        if (firstAdjustment === true) {
          toggleIsFirstAdjustment();
          toggleIsAdjusted();
        }

        //set storage for percents based on btn id prop
        handleStoredPercent(percentCarb, "Carbpercent");
        handleStoredPercent(percentProtein, "Proteinpercent");
        handleStoredPercent(percentFat, "Fatpercent");

        //set storage for totals on btn click
        if (isInitialLoad) {
          if (window.localStorage.getItem("storedTotals") !== null && !weight) {
            console.log("in 1st, storedtotal");
            handleMacro(carbLoaded, "Carb");
            handleMacro(proteinLoaded, "Protein");
            handleMacro(fatLoaded, "Fat");
            //set storage for total macros and percentages
            handleStoredTotal(carbLoaded, "Carb");
            handleStoredTotal(proteinLoaded, "Protein");
            handleStoredTotal(fatLoaded, "Fat");
            handleStoredTotal(id, "Goal");
            handleStoredTotal(weightLoaded, "Weight");
            setInitialLoad(false);
          }
          if (weight) {
            console.log("in 3rd, props.weight");
            handleMacro(carb, "Carb");
            handleMacro(protein, "Protein");
            handleMacro(fat, "Fat");
            //set storage for total macros and percentages
            handleStoredTotal(carb, "Carb");
            handleStoredTotal(protein, "Protein");
            handleStoredTotal(fat, "Fat");
            handleStoredTotal(id, "Goal");
            handleStoredTotal(Number(weight), "Weight");
            setInitialLoad(false);
          }
        } else {
          if (isInitialLoad === false && !weight) {
            alert("Please re-enter weight");
          } else {
            console.log("in last, else");
            handleMacro(carb, "Carb");
            handleMacro(protein, "Protein");
            handleMacro(fat, "Fat");
            //set storage for total macros and percentages
            handleStoredTotal(carb, "Carb");
            handleStoredTotal(protein, "Protein");
            handleStoredTotal(fat, "Fat");
            handleStoredTotal(id, "Goal");
            handleStoredTotal(weight, "Weight");
          }
        }
      }}
    >
      Calculate
    </button>
  );
}

export default GoalBtn;
