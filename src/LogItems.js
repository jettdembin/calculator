import React from "react";
import FoodForm from "./FoodForm";
import FoodList from "./FoodList";
import useFoodState from "./hooks/useFoodState";

function LogItems(props) {
  // const initialFoods = JSON.parse(window.localStorage.getItem("foods") || []);
  const initialFoods = [];
  const { foods, addFood, removeFood, allowEdit } = useFoodState(initialFoods);

  return (
    <>
      <FoodForm {...props} addFood={addFood} />
      <FoodList
        {...props}
        foods={foods}
        removeFood={removeFood}
        allowEdit={allowEdit}
      />
    </>
  );
}

export default LogItems;
