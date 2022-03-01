import React from "react";
import "./App.css";
import MacroApp from "./MacroApp";
import { StateProvider } from "./contexts/GoalContext";

function App() {
  return (
    <div className="App">
      <StateProvider>
        <MacroApp />
      </StateProvider>
    </div>
  );
}

export default App;
