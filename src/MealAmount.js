import React from "react";

function MealAmount(props) {
  let carb = props.storedTotals[0]["Carb"];
  let protein = props.storedTotals[0]["Protein"];
  let fat = props.storedTotals[0]["Fat"];

  return (
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
  );
}

export default MealAmount;
