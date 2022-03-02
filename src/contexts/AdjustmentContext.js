import React, { useState, createContext } from "react";

export const AdjustmentContext = createContext();

export function AdjustmentProvider(props) {
  const [isAdjusted, setAdjusted] = useState(false);
  const [firstAdjustment, setFirstAdjustment] = useState(false);
  const toggleIsAdjusted = () => {
    setAdjusted(!isAdjusted);
  };
  const toggleIsFirstAdjustment = () => {
    setFirstAdjustment(!firstAdjustment);
  };
  return (
    <AdjustmentContext.Provider
      value={{
        isAdjusted,
        firstAdjustment,
        toggleIsAdjusted,
        toggleIsFirstAdjustment,
      }}
    >
      {props.children}
    </AdjustmentContext.Provider>
  );
}
