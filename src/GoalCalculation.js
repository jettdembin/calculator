import React from "react";
import WeightForm from "./WeightForm";
import GoalOptions from "./GoalOptions";
import GoalMacro from "./GoalMacro";
import AdjustMeals from "./AdjustMeals";

import { AdjustmentProvider } from "./contexts/StateContext";

function GoalCalculation() {
  return (
    <div
      className="GoalCalculation"
      style={{ padding: "2rem", marginTop: "1rem" }}
    >
      <WeightForm />
      <AdjustmentProvider>
        <GoalOptions />
        <GoalMacro />
        <AdjustMeals />
      </AdjustmentProvider>
    </div>
  );
}

export default GoalCalculation;
