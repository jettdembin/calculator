import React from "react";
import "./App.css";
import MacroApp from "./MacroApp";
import { GoalProvider } from "./contexts/GoalContext";

function App() {
  return (
    <div className="App">
      <GoalProvider>
        <MacroApp />
      </GoalProvider>
    </div>
  );
}

export default App;
