import { useState } from "react";

export default (initialVal) => {
  const [val, setVal] = useState(initialVal);
  const handleChange = (e) => {
    const validateNumber = (number) => {
      return number.match(/^(?!.*\..*\.)[.\d]+$/);
    };
    if (validateNumber(e.target.value)) {
      setVal(e.target.value);
    } else if (!e.target.value) {
      setVal("");
    } else {
      alert("please only input digits");
    }
  };
  const reset = () => {
    setVal("");
  };
  return [val, handleChange, reset];
};
