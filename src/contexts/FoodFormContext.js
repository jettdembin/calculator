import React, { createContext } from "react";
import useFormState from "../hooks/useFormState";
import useFormDigitState from "../hooks/useFormDigitState";

export const FoodFormContext = createContext();

export function FoodFormProvider(props) {
  const [value, handleFoodChange, reset] = useFormState("");
  const [carb, handleProteinChange, resetProtein] = useFormDigitState("");
  const [protein, handleCarbChange, resetCarb] = useFormDigitState("");
  const [fat, handleFatChange, resetFat] = useFormDigitState("");

  return (
    <FoodFormProvider
      value={{
        value,
        carb,
        protein,
        fat,
        handleFoodChange,
        handleProteinChange,
        handleCarbChange,
        handleFatChange,
        reset,
        resetProtein,
        resetCarb,
        resetFat,
      }}
    >
      {props.children}
    </FoodFormProvider>
  );
}
