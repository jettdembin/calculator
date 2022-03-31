import React from "react";

const GoalMacros = (props) => {
  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>
          {JSON.parse(window.localStorage.getItem("storedTotals")) === null
            ? `Calories per Day`
            : props.totals[0].carb > props.adjustedMacros[0].carbAdjusted
            ? `Calories per Meal`
            : `Calories per Day`}
        </h2>
        <h2 style={{ textAlign: "center" }}>
          {JSON.parse(window.localStorage.getItem("storedTotals")) !== null &&
          props.isInitialLoad
            ? JSON.parse(window.localStorage.getItem("storedTotals"))[0][
                "Weight"
              ] *
              JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Goal"]
            : props.isAdjusted
            ? props.adjustedMacros[0].caloriesAdjusted
            : props.storedTotals[0]["Weight"] * props.storedTotals[0]["Goal"]}
        </h2>
      </div>
      <div className="Macro-totals" style={{ textAlign: "center" }}>
        <h4>Carbohydrates</h4>
        <div>
          {JSON.parse(window.localStorage.getItem("storedTotals")) !== null &&
          props.isInitialLoad
            ? JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Carb"]
            : props.isAdjusted
            ? props.adjustedMacros[0].carbAdjusted
            : props.storedTotals[0]["Carb"]}
          g
        </div>
        <div>
          {JSON.parse(window.localStorage.getItem("storedPercentages")) !== null
            ? JSON.parse(window.localStorage.getItem("storedPercentages"))[0][
                "Carbpercent"
              ]
            : props.storedPercentages[0]["Carbpercent"]}
          %
        </div>
      </div>
      <div className="Macro-totals" style={{ textAlign: "center" }}>
        <h4>Protein</h4>
        <div>
          {JSON.parse(window.localStorage.getItem("storedTotals")) !== null &&
          props.isInitialLoad
            ? JSON.parse(window.localStorage.getItem("storedTotals"))[0][
                "Protein"
              ]
            : props.isAdjusted
            ? props.adjustedMacros[0].proteinAdjusted
            : props.storedTotals[0]["Protein"]}
          g
        </div>
        <div>
          {JSON.parse(window.localStorage.getItem("storedPercentages")) !== null
            ? JSON.parse(window.localStorage.getItem("storedPercentages"))[0][
                "Proteinpercent"
              ]
            : props.storedPercentages[0]["Proteinpercent"]}
          %
        </div>
      </div>
      <div className="Macro-totals" style={{ textAlign: "center" }}>
        <h4>Fat</h4>
        <div>
          {JSON.parse(window.localStorage.getItem("storedTotals")) !== null &&
          props.isInitialLoad
            ? JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Fat"]
            : props.isAdjusted
            ? props.adjustedMacros[0].fatAdjusted
            : props.storedTotals[0]["Fat"]}
          g
        </div>
        <div>
          {JSON.parse(window.localStorage.getItem("storedPercentages")) !== null
            ? JSON.parse(window.localStorage.getItem("storedPercentages"))[0][
                "Fatpercent"
              ]
            : props.storedPercentages[0]["Fatpercent"]}
          %
        </div>
      </div>
    </>
  );
};

export default GoalMacros;
