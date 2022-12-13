import React, { useState, useEffect } from "react";
import * as mui from "../mui";
import GoalCalculation from "./GoalCalculation/GoalCalculation";
import LogItems from "./LogItems/LogItems";
import useFormDigitState from "../hooks/useFormDigitState";

const MacroApp = () => {
  //CONTEXT API REFACTOR BRANCH

  const adjustments = [
    {
      carbAdjusted: 0,
      proteinAdjusted: 0,
      fatAdjusted: 0,
      caloriesAdjusted: 0,
    },
  ];
  const initialTotalsMacros = [
    {
      carb: 0,
      protein: 0,
      fat: 0,
    },
  ];
  //set remaining amt storage to be passed down to all components
  const initialRemaining = [{ Carb: 0, Protein: 0, Fat: 0 }];
  const initialRemainingOption = () => {
    if (window.localStorage.getItem("remaining") !== null) {
      return JSON.parse(window.localStorage.getItem("remaining"));
    } else {
      return initialRemaining;
    }
  };
  //set totals in localstorage
  const initialTotals = [
    {
      Carb: 0,
      Protein: 0,
      Fat: 0,
      Goal: 0,
      Weight: 0,
    },
  ];
  const initialTotalsOption = () => {
    if (window.localStorage.getItem("storedTotals") !== null) {
      return JSON.parse(window.localStorage.getItem("storedTotals"));
    } else {
      return initialTotals;
    }
  };

  //set total percentages in storage
  const initialPercentages = [
    {
      Carbpercent: 0,
      Proteinpercent: 0,
      Fatpercent: 0,
    },
  ];
  const initialPercentagesOption = () => {
    if (window.localStorage.getItem("storedPercentages") !== null) {
      return JSON.parse(window.localStorage.getItem("storedPercentages"));
    } else {
      return initialPercentages;
    }
  };

  //States

  const [isInitialLoad, setInitialLoad] = useState(true);
  const [weight, handleChange] = useFormDigitState("");

  //unused piece of state
  const [goal, setGoal] = useState("");
  const [calories, handleCalculation] = useState(0);
  const [adjustedMacros, adjustMacros] = useState(adjustments);
  const [totals, setTotals] = useState(initialTotalsMacros);
  const [remaining, setRemaining] = useState(initialRemainingOption);
  const [storedTotals, setStoredTotals] = useState(initialTotalsOption);
  const [storedPercentages, setStoredPercent] = useState(
    initialPercentagesOption
  );

  //Set State Functions
  //1
  const toggleGoal = (goal) => {
    switch (goal) {
      case 12:
        setGoal("Cut");
        break;
      case 15:
        setGoal("Maintain");
        break;
      case 18:
        setGoal("Bulk");
        break;
      default:
        break;
    }
  };

  //2
  const updateCal = (id) => {
    handleCalculation(Number(weight) * id);
  };

  //3
  const updateMacros = (carb, protein, fat, meals) => {
    adjustMacros([
      {
        carbAdjusted: Math.round(carb / meals),
        proteinAdjusted: Math.round(protein / meals),
        fatAdjusted: Math.round(fat / meals),
        caloriesAdjusted: Math.round(calories / meals),
      },
    ]);
  };

  //4
  const updateAll = (total, macro) => {
    if (initialTotalsMacros[0].hasOwnProperty(macro)) {
      initialTotalsMacros[0][`${macro}`] = total;
      setTotals(initialTotalsMacros);
    }
  };

  //Beginning of Storage States
  //5
  const handleMacro = (totalRemaining, macro) => {
    console.log("in remaining");
    if (initialRemaining[0].hasOwnProperty(macro)) {
      initialRemaining[0][`${macro}`] = totalRemaining;
      setRemaining(initialRemaining);
    }
  };
  useEffect(() => {
    window.localStorage.setItem("remaining", JSON.stringify(remaining));
  }, [remaining]);

  //6
  const handleStoredTotal = (total, macro) => {
    if (initialTotals[0].hasOwnProperty(macro)) {
      initialTotals[0][`${macro}`] = total;
      setStoredTotals(initialTotals);
    }
  };
  useEffect(() => {
    window.localStorage.setItem("storedTotals", JSON.stringify(storedTotals));
  }, [storedTotals]);

  //7
  const handleStoredPercent = (percent, macro) => {
    if (initialPercentages[0].hasOwnProperty(macro)) {
      initialPercentages[0][`${macro}`] = percent;
      setStoredPercent(initialPercentages);
    }
  };
  useEffect(() => {
    window.localStorage.setItem(
      "storedPercentages",
      JSON.stringify(storedPercentages)
    );
  }, [storedPercentages]);

  return (
    <mui.Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <mui.AppBar color="primary" position="static" style={{ height: "64px" }}>
        <mui.Toolbar>
          <mui.Typography color="inherit">Macro Calculator</mui.Typography>
        </mui.Toolbar>
      </mui.AppBar>
      <mui.Grid container>
        <mui.Grid item xs={11} md={8} sm={4} style={{ margin: "auto" }}>
          <mui.Paper>
            <GoalCalculation
              isInitialLoad={isInitialLoad}
              setInitialLoad={setInitialLoad}
              storedPercentages={storedPercentages}
              handleStoredPercent={handleStoredPercent}
              storedTotals={storedTotals}
              handleStoredTotal={handleStoredTotal}
              remaining={remaining}
              handleMacro={handleMacro}
              toggleGoal={toggleGoal}
              weight={weight}
              calories={calories}
              updateCal={updateCal}
              updateAll={updateAll}
              updateMacros={updateMacros}
              adjustedMacros={adjustedMacros}
              totals={totals}
              handleChange={handleChange}
            />
          </mui.Paper>
          <mui.Paper>
            <LogItems
              storedTotals={storedTotals}
              remaining={remaining}
              handleMacro={handleMacro}
              totals={totals}
              weight={weight}
              goal={goal}
              calories={calories}
              updateCal={updateCal}
              updateAll={updateAll}
              updateMacros={updateMacros}
            />
          </mui.Paper>
        </mui.Grid>
      </mui.Grid>
    </mui.Paper>
  );
};
export default MacroApp;
