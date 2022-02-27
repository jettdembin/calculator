import React from "react";
import "./GoalOptions.css";
import MealAmount from "./MealAmount";

function AdjustMeals(props) {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h4>Show Total Macros</h4>
        <h6 style={{ marginTop: "-1rem" }}>(Per Meal)</h6>
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
          <li class="Goal-btn" style={{ margin: "0 .5rem" }}>
            <MealAmount {...props} id={1} type="All" />
          </li>
          <li class="Goal-btn" style={{ margin: "0 .5rem" }}>
            <MealAmount {...props} id={3} type="3" />
          </li>
          <li class="Goal-btn" style={{ margin: "0 .5rem" }}>
            <MealAmount {...props} id={4} type="4" />
          </li>
          <li class="Goal-btn" style={{ margin: "0 .5rem" }}>
            <MealAmount {...props} id={5} type="5" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AdjustMeals;
