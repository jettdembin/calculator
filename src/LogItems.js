import React, { useState } from "react";
import FoodForm from "./FoodForm";
import FoodList from "./FoodList";
import useFoodState from "./hooks/useFoodState";

function LogItems(props) {
  // const initialFoods = JSON.parse(window.localStorage.getItem("foods") || []);
  const initialFoods = [];
  const { foods, addFood, removeFood, allowEdit } = useFoodState(initialFoods);

  //state color for macros if user goes over in allowed macros
  //TODO need to refactor
  const [carbColor, setCarbColor] = useState("black");
  const [proteinColor, setProteinColor] = useState("black");
  const [fatColor, setFatColor] = useState("black");

  const toggleColor = (carb, protein, fat, operator) => {
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

    if (
      totalAddedMacrosofCarb + Number(carb) * (2 - operator) >
      storedTotalCarb
    ) {
      setCarbColor("red");
    } else {
      setCarbColor("black");
    }
    if (
      totalAddedMacrosofProtein + Number(protein) * (2 - operator) >
      storedTotalProtein
    ) {
      setProteinColor("red");
    } else {
      setProteinColor("black");
    }
    if (totalAddedMacrosofFat + Number(fat) * (2 - operator) > storedTotalFat) {
      setFatColor("red");
    } else {
      setFatColor("black");
    }
  };

  return (
    <div style={{ padding: "2rem", marginTop: "1rem" }}>
      <FoodForm
        {...props}
        addFood={addFood}
        carbColor={carbColor}
        proteinColor={proteinColor}
        fatColor={fatColor}
        toggleColor={toggleColor}
      />
      <FoodList
        {...props}
        foods={foods}
        removeFood={removeFood}
        allowEdit={allowEdit}
        carbColor={carbColor}
        proteinColor={proteinColor}
        fatColor={fatColor}
        toggleColor={toggleColor}
      />
    </div>
  );
}

export default LogItems;
