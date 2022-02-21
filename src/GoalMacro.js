import React, { useState } from "react";
import Paper from "@mui/material/Paper";

function GoalMacros(props) {
  const [isInitialLoad, setInitialLoad] = useState(true);
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
        <div>{props.totals[0].carb}g</div>
        <div>0%</div>
      </div>
      <div className="Macro-totals">
        <div>Protein</div>
        <div>
          {isInitialLoad
            ? 0 && setInitialLoad(false)
            : props.isAdjusted
            ? props.adjustedMacros[0].proteinAdjusted
            : props.totals[0].Protein}
          g
        </div>
        <div>0%</div>
      </div>
      <div className="Macro-totals">
        <div>Fat</div>
        <div>
          {isInitialLoad
            ? 0
            : props.isAdjusted
            ? props.adjustedMacros[0].fatAdjusted
            : props.totals[0].fat}
          g
        </div>
        <div>0%</div>
      </div>
    </Paper>
  );
}

export default GoalMacros;
