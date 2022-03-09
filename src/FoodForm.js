import React, { useContext } from "react";
import "./GoalOptions.css";
import TextField from "@mui/material/TextField";

import { StateContext } from "./contexts/StateContext";
import { FoodFormContext } from "./contexts/FoodFormContext";
import { FoodColorContext } from "./contexts/FoodColorContext";
import { FoodItemContext } from "./contexts/FoodItemContext";

function FoodForm(props) {
  const { remaining, handleMacro } = useContext(StateContext);
  const { addFood } = useContext(FoodItemContext);
  const {
    value,
    carb,
    protein,
    fat,
    handleFoodChange,
    handleCarbChange,
    handleProteinChange,
    handleFatChange,
    reset,
    resetCarb,
    resetProtein,
    resetFat,
  } = useContext(FoodFormContext);
  const { carbColor, proteinColor, fatColor, toggleColor } =
    useContext(FoodColorContext);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Remaining Macros for the Day</h2>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ margin: "auto" }}>
            <h3 style={{ textAlign: "center", color: `${carbColor}` }}>
              {remaining[0].Carb}g
            </h3>
            <h4>Carb(C)</h4>
          </div>
          <div style={{ margin: "auto" }}>
            <h3 style={{ textAlign: "center", color: `${proteinColor}` }}>
              {remaining[0].Protein}g
            </h3>
            <h4>Protein(P)</h4>
          </div>
          <div style={{ margin: "auto" }}>
            <h3 style={{ textAlign: "center", color: `${fatColor}` }}>
              {remaining[0].Fat}g
            </h3>
            <h4>Fat(F)</h4>
          </div>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addFood(value, carb, protein, fat);
          handleMacro(remaining[0].Carb - Number(carb), "Carb");
          handleMacro(remaining[0].Protein - Number(protein), "Protein");
          handleMacro(remaining[0].Fat - Number(fat), "Fat");
          toggleColor(carb, protein, fat, 1);
          reset();
          resetCarb();
          resetProtein();
          resetFat();
        }}
      >
        <TextField
          value={value}
          onChange={handleFoodChange}
          margin="normal"
          label="Food"
          fullWidth
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <TextField
              value={carb}
              onChange={handleCarbChange}
              label="Carbs(grams)"
            />
          </div>
          <div>
            <TextField
              value={protein}
              onChange={handleProteinChange}
              label="Protein(grams)"
            />
          </div>
          <div>
            <TextField
              value={fat}
              onChange={handleFatChange}
              label="Fat(grams)"
            />
          </div>
        </div>
        <div
          style={{ marginTop: "1rem", display: "flex", justifyContent: "end" }}
        >
          <button class="Goal-btn" type="submit">
            Add Food
          </button>
        </div>
      </form>
    </div>
  );
}

export default FoodForm;
