import React, { useContext, createContext, useState } from "react";
import { StateContext } from "./StateContext";

export const FoodColorContext = createContext();

export function FoodColorProvider(props) {
  const { storedTotals, remaining } = useContext(StateContext);

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
      : storedTotals[0]["Carb"];
    let storedTotalProtein = JSON.parse(
      window.localStorage.getItem("storedTotals")
    )
      ? JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Protein"]
      : storedTotals[0]["Protein"];
    let storedTotalFat = JSON.parse(window.localStorage.getItem("storedTotals"))
      ? JSON.parse(window.localStorage.getItem("storedTotals"))[0]["Fat"]
      : storedTotals[0]["Fat"];

    let remainingCarb = JSON.parse(window.localStorage.getItem("remaining"))
      ? JSON.parse(window.localStorage.getItem("remaining"))[0]["Carb"]
      : remaining[0]["Carb"];
    let remainingProtein = JSON.parse(window.localStorage.getItem("remaining"))
      ? JSON.parse(window.localStorage.getItem("remaining"))[0]["Protein"]
      : remaining[0]["Protein"];
    let remainingFat = JSON.parse(window.localStorage.getItem("remaining"))
      ? JSON.parse(window.localStorage.getItem("remaining"))[0]["Fat"]
      : remaining[0]["Fat"];

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
    <FoodColorContext.Provider
      value={{ carbColor, proteinColor, fatColor, toggleColor }}
    >
      {props.children}
    </FoodColorContext.Provider>
  );
}
