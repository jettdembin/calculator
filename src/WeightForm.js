import React, { useContext } from "react";
import { StateContext } from "./contexts/StateContext";

function WeightForm() {
  const { weight, handleChange } = useContext(StateContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "1rem 0",
      }}
    >
      <label>
        Weight:
        <input
          style={{ paddingLeft: ".5rem" }}
          type="text"
          placeholder="Pounds"
          value={weight}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default WeightForm;
