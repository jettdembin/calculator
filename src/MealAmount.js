import React from "react";
import Paper from "@mui/material/Paper";

function MealAmount(props) {
  let carb = () => {
    if (props.storedTotals[0]["Carb"] === undefined) {
      return 0;
    } else {
      return props.storedTotals[0]["Carb"];
    }
  };
  let protein = () => {
    if (props.storedTotals[0]["Protein"] === undefined) {
      return 0;
    } else {
      return props.storedTotals[0]["Protein"];
    }
  };
  let fat = () => {
    if (props.storedTotals[0]["Fat"] === undefined) {
      return 0;
    } else {
      return props.storedTotals[0]["Fat"];
    }
  };

  return (
    <Paper>
      <button
        className="Adjust-selection"
        onClick={() => {
          props.updateMacros(carb, protein, fat, Number(props.id));
          if (props.firstAdjustment === false) {
            props.toggleIsFirstAdjustment();
            props.toggleIsAdjusted();
          }
        }}
      >
        {props.type}
      </button>
    </Paper>
  );
}

export default MealAmount;
