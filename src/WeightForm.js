import React from "react";

function WeightForm(props) {
  return (
    <>
      <label>
        Weight:
        <input
          type="text"
          placeholder="Pounds"
          value={props.weight}
          onChange={props.handleChange}
        />
      </label>
    </>
  );
}

export default WeightForm;
