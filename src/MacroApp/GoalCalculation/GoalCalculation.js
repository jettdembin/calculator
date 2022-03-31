import React, { useState } from "react";
import WeightForm from "./WeightForm/WeightForm";
import GoalOptions from "./GoalOptions/GoalOptions";
import GoalMacro from "./GoalMacro/GoalMacro";
import AdjustMeals from "./AdjustMeals/AdjustMeals";

const GoalCalculation = (props) => {
  const [isAdjusted, setAdjusted] = useState(false);
  const [firstAdjustment, setFirstAdjustment] = useState(false);
  const toggleIsAdjusted = () => {
    setAdjusted(!isAdjusted);
  };
  const toggleIsFirstAdjustment = () => {
    setFirstAdjustment(!firstAdjustment);
  };
  return (
    <div
      className="GoalCalculation"
      style={{ padding: "2rem", marginTop: "1rem" }}
    >
      <WeightForm {...props} />
      <GoalOptions
        {...props}
        isAdjusted={isAdjusted}
        toggleIsAdjusted={toggleIsAdjusted}
        setAdjusted={setAdjusted}
        toggleIsFirstAdjustment={toggleIsFirstAdjustment}
        firstAdjustment={firstAdjustment}
      />
      <GoalMacro
        {...props}
        isAdjusted={isAdjusted}
        toggleIsAdjusted={toggleIsAdjusted}
        setAdjusted={setAdjusted}
        toggleIsFirstAdjustment={toggleIsFirstAdjustment}
        firstAdjustment={firstAdjustment}
      />
      <AdjustMeals
        {...props}
        isAdjusted={isAdjusted}
        toggleIsAdjusted={toggleIsAdjusted}
        setAdjusted={setAdjusted}
        toggleIsFirstAdjustment={toggleIsFirstAdjustment}
        firstAdjustment={firstAdjustment}
      />
    </div>
  );
};

export default GoalCalculation;
