import React from "react";
import Paper from "@mui/material/Paper";

function MealAmount(props) {
  const carb = props.totals[0].carb;
  const protein = props.totals[0].protein;
  const fat = props.totals[0].fat;

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
