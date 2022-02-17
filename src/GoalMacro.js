import React, { useState } from "react";
import Paper from "@mui/material/Paper";

function GoalMacros(props) {
  const [isInitialLoad, setInitialLoad] = useState(true);
  return (
    <Paper>
      {props.storedTotals[0].Carb}
      <div>
        <h2>
          {props.storedTotals[0].Carb > props.adjustedMacros[0].carbAdjusted
            ? `Calories per Meal`
            : `Calories per Day`}
        </h2>
        <h2>
          {props.calories
            ? props.calories
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
                : 18)}
        </h2>
      </div>
      <div className="Macro-totals">
        <div>Carbohydrates</div>
        <div>
          {isInitialLoad
            ? JSON.parse(window.localStorage.getItem("storedTotals"))[0][
                "Carb"
              ] && setInitialLoad(false)
            : props.isAdjusted
            ? props.adjustedMacros[0].carbAdjusted
            : props.storedTotals[0].Carb}
          g
        </div>
        <div>{props.storedPercentages[0].Carbpercent}%</div>
      </div>
      <div className="Macro-totals">
        <div>Protein</div>
        <div>
          {isInitialLoad
            ? JSON.parse(window.localStorage.getItem("storedTotals"))[0][
                "Protein"
              ] && setInitialLoad(false)
            : props.isAdjusted
            ? props.adjustedMacros[0].proteinAdjusted
            : props.storedTotals[0].Protein}
          g
        </div>
        <div>{props.storedPercentages[0].Proteinpercent}%</div>
      </div>
      <div className="Macro-totals">
        <div>Fat</div>
        <div>
          {isInitialLoad
            ? JSON.parse(window.localStorage.getItem("storedTotals"))[0][
                "Fat"
              ] && setInitialLoad(false)
            : props.isAdjusted
            ? props.adjustedMacros[0].datAdjusted
            : props.storedTotals[0].Fat}
          g
        </div>
        <div>{props.storedPercentages[0].Fatpercent}%</div>
      </div>
    </Paper>
  );
}

export default GoalMacros;
