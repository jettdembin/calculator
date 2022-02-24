import React from "react";

function MealAmount(props) {
  let carb = props.storedTotals[0]["Carb"];
  let protein = props.storedTotals[0]["Protein"];
  let fat = props.storedTotals[0]["Fat"];

  return (
    <div
      style={{ width: "20px", textAlign: "center" }}
      className="Adjust-selection"
      onClick={() => {
        if (props.weight) {
          props.updateMacros(carb, protein, fat, props.id);
          if (props.firstAdjustment === false) {
            props.toggleIsFirstAdjustment();
            props.toggleIsAdjusted();
          }
        } else {
          alert("Please input weight");
        }
      }}
    >
      {props.type}
    </div>
  );
}

export default MealAmount;
