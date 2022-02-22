import React from "react";
import Paper from "@mui/material/Paper";

function GoalMacros(props) {
  return (
    <Paper>
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
        {/* JSON.parse(window.localStorage.getItem("storedTotals"))[0][
            "Weight"
          ] === null
            ? 0
            : JSON.parse(window.localStorage.getItem("storedTotals"))[0][
                "Weight"
              ] *
              (JSON.parse(window.localStorage.getItem("storedTotals"))[0][
                "Goal"
              ] === "Cut"
                ? 12
                : JSON.parse(window.localStorage.getItem("storedTotals"))[0][
                    "Goal"
                  ] === "Maintain"
                ? 15
                : 18) */}
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
          {/* {isInitialLoad
            ? JSON.parse(window.localStorage.getItem("storedTotals"))[0][
                "Carb"
              ] && setInitialLoad(false)
            : props.isAdjusted
            ? props.adjustedMacros[0].carbAdjusted
            : props.storedTotals[0]["Carb"]} */}
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
          {/* {isInitialLoad
            ? JSON.parse(window.localStorage.getItem("storedTotals"))[0][
                "Protein"
              ] && setInitialLoad(false)
            : props.isAdjusted
            ? props.adjustedMacros[0].proteinAdjusted
            : props.storedTotals[0]["Protein"]} */}
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
    </Paper>
  );
}

export default GoalMacros;
