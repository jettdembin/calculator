import React, { useContext } from "react";
import { StateContext } from "./contexts/StateContext";
import { AdjustmentContext } from "./contexts/AdjustmentContext";

function MealAmount(props) {
  const { weight, storedTotals, updateMacros } = useContext(StateContext);
  const { firstAdjustment, toggleIsFirstAdjustment, toggleIsAdjusted } =
    useContext(AdjustmentContext);

  let storedCarb = () => JSON.parse(window.localStorage.getItem("storedTotals"))[0][
    "Carb"
  ];
  let storedProtein = () => JSON.parse(
    window.localStorage.getItem("storedTotals")
  )[0]["Protein"];
  let storedFat = () => JSON.parse(window.localStorage.getItem("storedTotals"))[0][
    "Fat"
  ];

  return (
    <div
      style={{ width: "20px", textAlign: "center" }}
      className="Adjust-selection"
      onClick={() => {
        if (weight) {
          updateMacros(props.carb, props.protein, props.fat, props.id);
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
