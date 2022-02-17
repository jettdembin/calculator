import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import GoalCalculation from "./GoalCalculation";
import LogItems from "./LogItems";

import useFormDigitState from "./hooks/useFormDigitState";

function MacroApp() {
  const [weight, handleChange] = useFormDigitState("");
  const [goal, setGoal] = useState("");
  const toggleGoal = (goal) => {
    switch (goal) {
      case "12":
        setGoal("Cut");
        break;
      case "15":
        setGoal("Maintain");
        break;
      case "18":
        setGoal("Bulk");
        break;
      default:
        break;
    }
  };
  const [calories, handleCalculation] = useState(0);
  const updateCal = (id) => {
    handleCalculation(Number(weight) * Number(id));
  };
  //4th state (shows correct state on 2nd click)
  // const [totals, setTotals] = useState(initialWeight);
  const adjustments = [
    {
      carbAdjusted: 0,
      proteinAdjusted: 0,
      fatAdjusted: 0,
    },
  ];
  //4th state (working)
  const [adjustedMacros, adjustMacros] = useState(adjustments);
  const updateMacros = (carb, protein, fat, meals) => {
    adjustMacros([
      {
        ...adjustedMacros,
        carbAdjusted: Math.round(carb / meals),
        proteinAdjusted: Math.round(protein / meals),
        fatAdjusted: Math.round(fat / meals),
      },
    ]);
  };
  const initialTotalsMacros = [
    {
      carb: undefined,
      protein: undefined,
      fat: undefined,
    },
  ];
  //5th state
  const [totals, setTotals] = useState(initialTotalsMacros);
  const updateAll = (total, macro) => {
    if (initialTotalsMacros[0].hasOwnProperty(macro)) {
      initialTotalsMacros[0][`${macro}`] = Number(total);
      setTotals(initialTotalsMacros);
    }
  };
  //set remaining amt storage to be passed down to all components
  const initialRemaining = [{ Carb: 0, Protein: 0, Fat: 0 }];
  const initialRemainingOption = JSON.parse(
    window.localStorage.getItem("remaining") || JSON.stringify(initialRemaining)
  );
  //6th state (working)
  const [remaining, setRemaining] = useState(initialRemainingOption);
  const handleMacro = (totalRemaining, macro) => {
    console.log("in remaining");
    if (initialRemaining[0].hasOwnProperty(macro)) {
      initialRemaining[0][`${macro}`] = Number(totalRemaining);
      setRemaining(initialRemaining);
    }
  };
  useEffect(() => {
    JSON.stringify(remaining) === remaining
      ? window.localStorage.setItem("remaining", remaining)
      : window.localStorage.setItem("remaining", JSON.stringify(remaining));
  }, [remaining]);

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
  const initialTotalsOption = JSON.parse(
    window.localStorage.getItem("storedTotals") || JSON.stringify(initialTotals)
  );
  //7th state
  const [storedTotals, setStoredTotals] = useState(initialTotalsOption);
  const handleStoredTotal = (total, macro) => {
    if (initialTotals[0].hasOwnProperty(macro)) {
      initialTotals[0][`${macro}`] = total;
      setStoredTotals(initialTotals);
    }
  };
  useEffect(() => {
    JSON.stringify(storedTotals) === storedTotals
      ? window.localStorage.setItem("storedTotals", storedTotals)
      : window.localStorage.setItem(
          "storedTotals",
          JSON.stringify(storedTotals)
        );
  }, [storedTotals]);

  //set total percentages in storage
  const initialPercentages = JSON.stringify([
    {
      Carbpercent: 0,
      Proteinpercent: 0,
      Fatpercent: 0,
    },
  ]);
  const initialPercentagesOption = JSON.parse(
    window.localStorage.getItem("storedPercentages") ||
      JSON.stringify(initialPercentages)
  );
  //8th state (last state)
  const [storedPercentages, setStoredPercent] = useState(
    initialPercentagesOption
  );
  const handleStoredPercent = (percent, macro) => {
    if (initialPercentages[0].hasOwnProperty(macro)) {
      initialPercentages[0][`${macro}`] = Number(percent);
      setStoredPercent(initialPercentages);
    }
  };
  useEffect(() => {
    JSON.stringify(storedPercentages) === storedPercentages
      ? window.localStorage.setItem("storedPercentages", storedPercentages)
      : window.localStorage.setItem(
          "storedPercentages",
          JSON.stringify(storedPercentages)
        );
  }, [storedPercentages]);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Macro Calculator</Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={11} md={8} sm={4}>
          <GoalCalculation
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
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MacroApp;

// MacroApp
//-GoalCalculation
//  -GoalForm
//  -GoalOptions
//    -GoalBtn
//    -GoalBtn
//    -GoalBtn
//  -GoalMacros
//  -AdjustMeals
//  -GoalDisplay
//    -GoalMacro
//    -GoalMacro
//    -GoalMacro
//    -AdjustCalories
//      -AdjustAmount
//      -AdjustAmount
//      -AdjustAmount
//      -AdjustAmount
//-LogItems
//  -FoodForm
//  -FoodList
//    -FoodItem

//id task completed
