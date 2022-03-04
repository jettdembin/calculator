import React, { useContext } from "react";
import * as mui from "./mui";
import Food from "./Food";

import { FoodItemContext } from "./contexts/FoodItemContext";

function FoodList() {
  const { foods } = useContext(FoodItemContext)
  return foods.length ? (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            margin: "auto",
          }}
        >
          <div style={{ display: "flex", marginLeft: "1rem" }}>
            <h4>(C)</h4>
            <h4 style={{ margin: "1.35rem 1.8rem" }}>(P)</h4>
            <h4>(F)</h4>
          </div>
        </div>
      </div>
      <mui.List>
        {foods.map((food, i) => (
          <>
            <Food food={food} id={food.id} key={food.id}></Food>
            {i < foods.length - 1 && <mui.Divider />}
          </>
        ))}
      </mui.List>
    </>
  ) : (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          margin: "auto",
        }}
      >
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <h4>(C)</h4>
          <h4 style={{ margin: "1.35rem 1.8rem" }}>(P)</h4>
          <h4>(F)</h4>
        </div>
      </div>
    </div>
  );
}
export default FoodList;
