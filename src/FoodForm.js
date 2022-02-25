import React, { useState } from "react";
import "./GoalOptions.css";
import TextField from "@mui/material/TextField";
import useFormState from "./hooks/useFormState";
import useFormDigitState from "./hooks/useFormDigitState";

function FoodForm(props) {
  const [value, handleFoodChange, reset] = useFormState("");
  const [carb, handleProteinChange, resetProtein] = useFormDigitState("");
  const [protein, handleCarbChange, resetCarb] = useFormDigitState("");
  const [fat, handleFatChange, resetFat] = useFormDigitState("");

  //color for macros if user goes over in allowed macros
  //TODO need to refactor
  const [carbColor, setCarbColor] = useState("black");
  const [proteinColor, setProteinColor] = useState("black");
  const [fatColor, setFatColor] = useState("black");

  const toggleColor = () => {
    let storedTotalCarb = JSON.parse(
      window.localStorage.getItem("storedTotals")
    )
      ? JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Carb"]
      : props.storedTotals[0]["Carb"];
    let storedTotalProtein = JSON.parse(
      window.localStorage.getItem("storedTotals")
    )
      ? JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Protein"]
      : props.storedTotals[0]["Protein"];
    let storedTotalFat = JSON.parse(window.localStorage.getItem("storedTotals"))
      ? JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Fat"]
      : props.storedTotals[0]["Fat"];

    let remainingCarb = JSON.parse(window.localStorage.getItem("remaining"))
      ? JSON.parse(window.localStorage.getItem("remaining"))[0]["Carb"]
      : props.remaining[0]["Carb"];
    let remainingProtein = JSON.parse(window.localStorage.getItem("remaining"))
      ? JSON.parse(window.localStorage.getItem("remaining"))[0]["Protein"]
      : props.remaining[0]["Protein"];
    let remainingFat = JSON.parse(window.localStorage.getItem("remaining"))
      ? JSON.parse(window.localStorage.getItem("remaining"))[0]["Fat"]
      : props.remaining[0]["Fat"];

    let totalAddedMacrosofCarb = storedTotalCarb - remainingCarb;
    let totalAddedMacrosofProtein = storedTotalProtein - remainingProtein;
    let totalAddedMacrosofFat = storedTotalFat - remainingFat;

    console.log(storedTotalCarb);
    console.log(props.remaining.Carb);

    if (totalAddedMacrosofCarb + Number(carb) > storedTotalCarb) {
      setCarbColor("red");
    } else {
      setCarbColor("black");
    }
    if (totalAddedMacrosofProtein + Number(protein) > storedTotalProtein) {
      setProteinColor("red");
    } else {
      setProteinColor("black");
    }
    if (totalAddedMacrosofFat + Number(fat) > storedTotalFat) {
      setFatColor("red");
    } else {
      setFatColor("black");
    }
  };

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
              {props.remaining[0].Carb}g
            </h3>
            <h4>Carb(C)</h4>
          </div>
          <div style={{ margin: "auto" }}>
            <h3 style={{ textAlign: "center", color: `${proteinColor}` }}>
              {props.remaining[0].Protein}g
            </h3>
            <h4>Protein(P)</h4>
          </div>
          <div style={{ margin: "auto" }}>
            <h3 style={{ textAlign: "center", color: `${fatColor}` }}>
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
          toggleColor();
          reset();
          resetCarb();
          resetProtein();
          resetFat();
        }}
      >
        {value}
        <TextField
          value={value}
          onChange={handleFoodChange}
          margin="normal"
          label="Food"
          fullWidth
        />
        {carb}
        <TextField
          value={carb}
          onChange={handleProteinChange}
          label="Carbs(grams)"
        />
        {protein}
        <TextField
          value={protein}
          onChange={handleCarbChange}
          label="Protein(grams)"
        />
        {fat}
        <TextField value={fat} onChange={handleFatChange} label="Fat(grams)" />
        <button class="Goal-btn" type="submit">
          Add Food
        </button>
      </form>
    </div>
  );
}

export default FoodForm;
