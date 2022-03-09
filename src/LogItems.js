import React from "react";
import FoodForm from "./FoodForm";
import FoodList from "./FoodList";

import { FoodColorProvider } from "./contexts/FoodColorContext";
import { FoodFormProvider } from "./contexts/FoodFormContext";
import { FoodItemProvider } from "./contexts/FoodItemContext";

function LogItems(props) {
  return (
    // style={{ padding: "2rem", marginTop: "1rem" }}
    <FoodColorProvider>
      <FoodItemProvider>
        <FoodFormProvider>
          <FoodForm />
        </FoodFormProvider>
        <FoodList />
      </FoodItemProvider>
    </FoodColorProvider>
  );
}

export default LogItems;
