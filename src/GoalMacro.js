import React from "react";

function GoalMacros(props) {
  return (
    <>
      <div>
        <h2>
          {JSON.parse(window.localStorage.getItem("storedTotals")) === null
            ? `Calories per Day`
            : props.totals[0].carb > props.adjustedMacros[0].carbAdjusted
            ? `Calories per Meal`
            : `Calories per Day`}
        </h2>
        <h2>
          {props.isAdjusted
            ? props.adjustedMacros[0].caloriesAdjusted
            : props.storedTotals[0]["Weight"] * [props.storedTotals[0]["Goal"]]}
        </h2>
      </div>
      <div className="Macro-totals">
        <div>Carbohydrates</div>
        <div>
          {JSON.parse(window.localStorage.getItem("storedTotals")) !== null &&
          props.isInitialLoad
            ? JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Carb"]
            : props.adjustedMacros[0].carbAdjusted
            ? props.adjustedMacros[0].carbAdjusted
            : props.storedTotals[0]["Carb"]}
          g
        </div>
        <div>{props.storedPercentages[0]["Carbpercent"]}%</div>
      </div>
      <div className="Macro-totals">
        <div>Protein</div>
        <div>
          {JSON.parse(window.localStorage.getItem("storedTotals")) !== null &&
          props.isInitialLoad
            ? JSON.parse(window.localStorage.getItem("storedTotals"))[0][
                "Protein"
              ]
            : props.adjustedMacros[0].proteinAdjusted
            ? props.adjustedMacros[0].proteinAdjusted
            : props.storedTotals[0]["Protein"]}
          g
        </div>
        <div>{props.storedPercentages[0]["Proteinpercent"]}%</div>
      </div>
      <div className="Macro-totals">
        <div>Fat</div>
        <div>
          {JSON.parse(window.localStorage.getItem("storedTotals")) !== null &&
          props.isInitialLoad
            ? JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Fat"]
            : props.adjustedMacros[0].fatAdjusted
            ? props.adjustedMacros[0].fatAdjusted
            : props.storedTotals[0]["Fat"]}
          g
        </div>
        <div>{props.storedPercentages[0]["Fatpercent"]}%</div>
      </div>
    </>
  );
}

export default GoalMacros;
