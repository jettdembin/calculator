import React, { useContext } from "react";
import { StateContext } from "./contexts/StateContext";
import { AdjustmentContext } from "./contexts/AdjustmentContext";

function MealAmount(props) {
  const { weight, storedTotals, updateMacros } = useContext(StateContext);
  const { firstAdjustment, toggleIsFirstAdjustment, toggleIsAdjusted } =
    useContext(AdjustmentContext);

<<<<<<< HEAD
  let carb = storedTotals[0]["Carb"];
  let protein = storedTotals[0]["Protein"];
  let fat = storedTotals[0]["Fat"];

  let storedCarb = () => {
    if (window.localStorage.getItem("storedTotals") !== null) {
      return JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Carb"];
    } else {
      return 0;
    }
  };
  let storedProtein = () => {
    if (window.localStorage.getItem("storedTotals") !== null) {
      return JSON.parse(window.localStorage.getItem("storedTotals"))[0][
        "Protein"
      ];
    } else {
      return 0;
    }
  };
  let storedFat = () => {
    if (window.localStorage.getItem("storedTotals") !== null) {
      return JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Fat"];
    } else {
      return 0;
    }
  };
=======
  let storedCarb = () => JSON.parse(window.localStorage.getItem("storedTotals"))[0][
    "Carb"
  ];
  let storedProtein = () => JSON.parse(
    window.localStorage.getItem("storedTotals")
  )[0]["Protein"];
  let storedFat = () => JSON.parse(window.localStorage.getItem("storedTotals"))[0][
    "Fat"
  ];
>>>>>>> noContext

  return (
    <div
      style={{ width: "20px", textAlign: "center" }}
      className="Adjust-selection"
      onClick={() => {
        if (weight) {
          updateMacros(carb, protein, fat, props.id);
          if (firstAdjustment === false) {
            toggleIsFirstAdjustment();
            toggleIsAdjusted();
          }
        } else if (
          JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Weight"]
        ) {
          updateMacros(storedCarb, storedProtein, storedFat, props.id);
          if (firstAdjustment === false) {
            toggleIsFirstAdjustment();
            toggleIsAdjusted();
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
