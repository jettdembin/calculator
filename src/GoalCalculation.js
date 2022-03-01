import React from "react";
import WeightForm from "./WeightForm";
import GoalOptions from "./GoalOptions";
import GoalMacro from "./GoalMacro";
import AdjustMeals from "./AdjustMeals";

import { AdjustmentProvider } from "./contexts/AdjustmentContext";

function GoalCalculation() {
  return (
    <AdjustmentProvider
      className="GoalCalculation"
      style={{ padding: "2rem", marginTop: "1rem" }}
    >
      <WeightForm />
      <GoalOptions />
      <GoalMacro />
      <AdjustMeals />
    </AdjustmentProvider>
  );
}

export default GoalCalculation;
