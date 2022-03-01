import React, from "react";
import "./GoalOptions.css";
import TextField from "@mui/material/TextField";
import {FoodProvider} from "./contexts/FoodContext";

function FoodForm(props) {

  return (
    <FoodProvider>
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
            <h3 style={{ textAlign: "center", color: `${props.carbColor}` }}>
              {props.remaining[0].Carb}g
            </h3>
            <h4>Carb(C)</h4>
          </div>
          <div style={{ margin: "auto" }}>
            <h3 style={{ textAlign: "center", color: `${props.proteinColor}` }}>
              {props.remaining[0].Protein}g
            </h3>
            <h4>Protein(P)</h4>
          </div>
          <div style={{ margin: "auto" }}>
            <h3 style={{ textAlign: "center", color: `${props.fatColor}` }}>
              {props.remaining[0].Fat}g
            </h3>
            <h4>Fat(F)</h4>
          </div>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addFood(value, carb, protein, fat);
          props.handleMacro(props.remaining[0].Carb - Number(carb), "Carb");
          props.handleMacro(
            props.remaining[0].Protein - Number(protein),
            "Protein"
          );
          props.handleMacro(props.remaining[0].Fat - Number(fat), "Fat");
          props.toggleColor(carb, protein, fat, 1);
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
              onChange={handleProteinChange}
              label="Carbs(grams)"
            />
          </div>
          <div>
            <TextField
              value={protein}
              onChange={handleCarbChange}
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
    </FoodProvider>
  );
}

export default FoodForm;
