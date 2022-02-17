import React from "react";
import Paper from "@mui/material/Paper";

function GoalBtn(props) {
  let id = props.id;
  //depending on first load
  let calories = Number(props.id) * Number(props.storedTotals[0]["Weight"]);
  // let caloriesLoaded = () => {
  //   if (window.localStorage.getItem("storedTotals") !== null) {
  //     return (
  //       JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Weight"] *
  //       Number(props.id)
  //     );
  //   }
  // };

  let carb = Math.round((calories * (Number(props.percentCarb) / 10)) / 4);
  // const carbLoaded = () => {
  //   if (window.localStorage.getItem("storedTotals") !== null) {
  //     return JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Carb"];
  //   }
  // };

  let protein = Math.round(
    (calories * (Number(props.percentProtein) / 10)) / 4
  );
  // const proteinLoaded = () => {
  //   if (window.localStorage.getItem("storedTotals") !== null) {
  //     return JSON.parse(window.localStorage.getItem("storedTotals"))[0][
  //       "Protein"
  //     ];
  //   }
  // };

  let fat = Math.round((calories * (Number(props.percentFat) / 10)) / 9);
  // const fatLoaded = () => {
  //   if (window.localStorage.getItem("storedTotals") !== null) {
  //     return JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Fat"];
  //   }
  // };

  return (
    <Paper>
      <button
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
          props.handleMacro(carb, "Carb");
          props.handleMacro(protein, "Protein");
          props.handleMacro(fat, "Fat");
          //set storage for total macros and percentages
          props.handleStoredTotal(carb, "Carb");
          props.handleStoredTotal(protein, "Protein");
          props.handleStoredTotal(fat, "Fat");
          props.handleStoredTotal(id, "Goal");
          props.handleStoredTotal(
            Number(props.weight)
              ? Number(props.weight)
              : JSON.parse(window.localStorage.getItem("storedTotals"))[0][
                  "Weight"
                ],
            "Weight"
          );
          props.handleStoredPercent(
            Number(props.percentCarb) * 10,
            "Carbpercent"
          );
          props.handleStoredPercent(
            Number(props.percentProtein) * 10,
            "Proteinpercent"
          );
          props.handleStoredPercent(
            Number(props.percentFat) * 10,
            "Fatpercent"
          );
        }}
      >
        Calculate
      </button>
    </Paper>
  );
}

export default GoalBtn;
