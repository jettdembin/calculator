import React, { useContext } from "react";
import { StateContext } from "./contexts/StateContext";
import { AdjustmentContext } from "./contexts/AdjustmentContext";

function GoalMacros(props) {
  const { totals, isInitialLoad, storedTotals, storedPercentages } =
    useContext(StateContext);
  const { isAdjusted } = useContext(AdjustmentContext);
  const { adjustedMacros } = useContext(StateContext);

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>
          {window.localStorage.getItem("storedTotals") === null
            ? `Calories per Day`
            : totals[0].carb > adjustedMacros[0].carbAdjusted
            ? `Calories per Meal`
            : `Calories per Day`}
        </h2>
        <h2 style={{ textAlign: "center" }}>
          {window.localStorage.getItem("storedTotals") !== null &&
          isInitialLoad
            ? JSON.parse(window.localStorage.getItem("storedTotals"))[0][
                "Weight"
              ] *
              JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Goal"]
            : isAdjusted
            ? adjustedMacros[0].caloriesAdjusted
            : storedTotals[0]["Weight"] * storedTotals[0]["Goal"]}
        </h2>
      </div>
      <div className="Macro-totals" style={{ textAlign: "center" }}>
        <h4>Carbohydrates</h4>
        <div>
          {window.localStorage.getItem("storedTotals") !== null &&
          isInitialLoad
            ? JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Carb"]
            : isAdjusted
            ? adjustedMacros[0].carbAdjusted
            : storedTotals[0]["Carb"]}
          g
        </div>
        <div>
          {window.localStorage.getItem("storedPercentages") !== null &&
          props.isInitialLoad
            ? JSON.parse(window.localStorage.getItem("storedPercentages"))[0][
                "Carbpercent"
              ]
            : storedPercentages[0]["Carbpercent"]}
          %
        </div>
      </div>
      <div className="Macro-totals" style={{ textAlign: "center" }}>
        <h4>Protein</h4>
        <div>
          {window.localStorage.getItem("storedTotals") !== null &&
          isInitialLoad
            ? JSON.parse(window.localStorage.getItem("storedTotals"))[0][
                "Protein"
              ]
            : isAdjusted
            ? adjustedMacros[0].proteinAdjusted
            : storedTotals[0]["Protein"]}
          g
        </div>
        <div>
          {window.localStorage.getItem("storedPercentages") !== null &&
          props.isInitialLoad
            ? JSON.parse(window.localStorage.getItem("storedPercentages"))[0][
                "Proteinpercent"
              ]
            : storedPercentages[0]["Proteinpercent"]}
          %
        </div>
      </div>
      <div className="Macro-totals" style={{ textAlign: "center" }}>
        <h4>Fat</h4>
        <div>
          {window.localStorage.getItem("storedTotals") !== null &&
          isInitialLoad
            ? JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Fat"]
            : isAdjusted
            ? adjustedMacros[0].fatAdjusted
            : storedTotals[0]["Fat"]}
          g
        </div>
        <div>
          {window.localStorage.getItem("storedPercentages") !== null &&
          props.isInitialLoad
            ? JSON.parse(window.localStorage.getItem("storedPercentages"))[0][
                "Fatpercent"
              ]
            : storedPercentages[0]["Fatpercent"]}
          %
        </div>
      </div>
    </>
  );
}

export default GoalMacros;
