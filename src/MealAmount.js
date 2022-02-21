import React from "react";
import Paper from "@mui/material/Paper";

function MealAmount(props) {
  let carb = props.storedTotals[0]["Carb"];
  let protein = props.storedTotals[0]["Protein"];
  let fat = props.storedTotals[0]["Fat"];

  return (
    <Paper>
      <button
        className="Adjust-selection"
        onClick={() => {
          props.updateMacros(carb, protein, fat, props.id);
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
