import React from "react";

const WeightForm = (props) => {
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
          value={props.weight}
          onChange={props.handleChange}
        />
      </label>
    </div>
  );
};

export default WeightForm;
