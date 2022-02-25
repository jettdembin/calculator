import { useState } from "react";

export default (initialVal) => {
  const [val, setVal] = useState(initialVal);
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const reset = () => {
    setVal("");
  };
  return [val, handleChange, reset];
};
