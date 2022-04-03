import React from "react";
import "../GoalOptions/GoalOptions.css";
import MealAmount from "./MealAmount/MealAmount";

function AdjustMeals(props) {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h4>Show Total Macros</h4>
        <h6 style={{ marginTop: "-1rem" }}>
          (
          {JSON.parse(window.localStorage.getItem("storedTotals")) === null
            ? `Calories per Day`
            : props.totals[0].carb > props.adjustedMacros[0].carbAdjusted
            ? `Calories per Meal`
            : `Calories per Day`}
          )
        </h6>
      </div>
      <nav>
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            justifyContent: "center",
            paddingBottom: "1rem",
          }}
        >
          <li className="Goal-btn" style={{ margin: "0 .5rem" }}>
            <MealAmount {...props} id={1} type="All" />
          </li>
          <li className="Goal-btn" style={{ margin: "0 .5rem" }}>
            <MealAmount {...props} id={3} type="3" />
          </li>
          <li className="Goal-btn" style={{ margin: "0 .5rem" }}>
            <MealAmount {...props} id={4} type="4" />
          </li>
          <li className="Goal-btn" style={{ margin: "0 .5rem" }}>
            <MealAmount {...props} id={5} type="5" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AdjustMeals;
