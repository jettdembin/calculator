import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import useFormState from "./hooks/useFormState";

import { StateContext } from './contexts/StateContext';

function EditFoodForm({ id, item, toggleEdit }) {
  const [value, handleChange, reset] = useFormState(item);
  const { allowEdit } = useContext(StateContext)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        allowEdit(id, value);
        reset();
        toggleEdit();
      }}
      style={{ marginLeft: "0", width: "50%" }}
    >
      <div style={{ display: "flex" }}>
        <TextField
          margin="normal"
          value={value}
          onChange={handleChange}
          autoFocus
        ></TextField>
      </div>
    </form>
  );
}

export default EditFoodForm;
