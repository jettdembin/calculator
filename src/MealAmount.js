import React from "react";

function MealAmount(props) {
  let carb = props.storedTotals[0]["Carb"];
  let protein = props.storedTotals[0]["Protein"];
  let fat = props.storedTotals[0]["Fat"];

  let storedCarb = () => {
    if (window.localStorage.getItem("storedTotals")) {
      return JSON.parse(window.localStorage.getItem("storedTotals"))[0][
        "Carb"
      ];
    } else {
      return 0
    }
  }
  let storedProtein = () => {
    if (window.localStorage.getItem("storedTotals")) {
      return JSON.parse(window.localStorage.getItem("storedTotals"))[0][
        "Protein"
      ];
    } else {
      return 0
    }
  }
  let storedFat = () => {
    if (window.localStorage.getItem("storedTotals")) {
      return JSON.parse(window.localStorage.getItem("storedTotals"))[0][
        "Fat"
      ];
    } else {
      return 0
    }
  }

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
