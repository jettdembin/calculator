import React from "react";

function MealAmount(props) {
  let carb = props.storedTotals[0]["Carb"];
  let protein = props.storedTotals[0]["Protein"];
  let fat = props.storedTotals[0]["Fat"];

  let storedCarb = JSON.parse(window.localStorage.getItem("storedTotals"))[0][
    "Carb"
  ];
  let storedProtein = JSON.parse(
    window.localStorage.getItem("storedTotals")
  )[0]["Protein"];
  let storedFat = JSON.parse(window.localStorage.getItem("storedTotals"))[0][
    "Fat"
  ];

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
        } else if (
          JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Weight"]
        ) {
          props.updateMacros(storedCarb, storedProtein, storedFat, props.id);
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
