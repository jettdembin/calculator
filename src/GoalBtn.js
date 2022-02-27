import React from "react";
import "./GoalOptions.css";
function GoalBtn(props) {
  let id = props.id;

  let carb = Math.round(
    (props.id * Number(props.weight) * (props.percentCarb / 10)) / 4
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
    (props.id * Number(props.weight) * (props.percentProtein / 10)) / 4
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
    (props.id * Number(props.weight) * (props.percentFat / 10)) / 9
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
          4
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

  return (
    <button
      className="Goal-btn"
      onClick={() => {
        props.toggleGoal(id);
        //dependant upon props.id of btn and weight state that is updated by user upon enter of weightform
        props.updateCal(id);

        props.updateAll(carb, "carb");
        props.updateAll(protein, "protein");
        props.updateAll(fat, "fat");

        if (props.firstAdjustment === true) {
          props.toggleIsFirstAdjustment();
          props.toggleIsAdjusted();
        }
        //set storage for totals on btn click
        if (props.isInitialLoad) {
          if (
            window.localStorage.getItem("storedTotals") !== null &&
            !props.weight
          ) {
            props.handleMacro(carbLoaded, "Carb");
            props.handleMacro(proteinLoaded, "Protein");
            props.handleMacro(fatLoaded, "Fat");
            //set storage for total macros and percentages
            props.handleStoredTotal(carbLoaded, "Carb");
            props.handleStoredTotal(proteinLoaded, "Protein");
            props.handleStoredTotal(fatLoaded, "Fat");
            props.handleStoredTotal(id, "Goal");
            props.handleStoredTotal(weightLoaded, "Weight");
            props.handleStoredPercent(props.percentCarb * 10, "Carbpercent");
            props.handleStoredPercent(
              props.percentProtein * 10,
              "Proteinpercent"
            );
            props.handleStoredPercent(props.percentFat * 10, "Fatpercent");
            props.setInitialLoad(false);
          }
          if (props.weight) {
            props.handleMacro(carb, "Carb");
            props.handleMacro(protein, "Protein");
            props.handleMacro(fat, "Fat");
            //set storage for total macros and percentages
            props.handleStoredTotal(carb, "Carb");
            props.handleStoredTotal(protein, "Protein");
            props.handleStoredTotal(fat, "Fat");
            props.handleStoredTotal(id, "Goal");
            props.handleStoredTotal(Number(props.weight), "Weight");
            props.setInitialLoad(false);
          }
        } else {
          if (props.isInitialLoad === false && !props.weight) {
            alert("Please re-enter weight");
          } else {
            props.handleMacro(carb, "Carb");
            props.handleMacro(protein, "Protein");
            props.handleMacro(fat, "Fat");
            //set storage for total macros and percentages
            props.handleStoredTotal(carb, "Carb");
            props.handleStoredTotal(protein, "Protein");
            props.handleStoredTotal(fat, "Fat");
            props.handleStoredTotal(id, "Goal");
            props.handleStoredTotal(props.weight, "Weight");
          }
        }
      }}
    >
      Calculate
    </button>
  );
}

export default GoalBtn;
