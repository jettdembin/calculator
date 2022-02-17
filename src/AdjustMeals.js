import React from "react";
import Paper from "@mui/material/Paper";
import MealAmount from "./MealAmount";

function AdjustMeals(props) {
  return (
    <Paper>
      <div className="Adjust-cntr">
        <div className="Adjust-header">
          <h4>Adjust Meals per Day</h4>
        </div>
        <nav className="Adjust-nav-cntr">
          <ul className="Adjust-nav">
            <li>
              <MealAmount {...props} id="1" type="All" />
            </li>
            <li>
              <MealAmount {...props} id="3" type="3" />
            </li>
            <li>
              <MealAmount {...props} id="4" type="4" />
            </li>
            <li>
              <MealAmount {...props} id="5" type="5" />
            </li>
          </ul>
        </nav>
      </div>
    </Paper>
  );
}

export default AdjustMeals;
