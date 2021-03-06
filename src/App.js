import React, { useEffect } from "react";
import "./App.css";
import MacroApp from "./MacroApp/MacroApp";

const App = () => {
  useEffect(() => {
    document.title = "Macro Calculator";
  }, []);

  return (
    <div className="App">
      <MacroApp />
    </div>
  );
};

export default App;
