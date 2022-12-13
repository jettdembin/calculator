import React from "react";
import * as mui from "../../../mui";
import Food from "./Food/Food";

const FoodList = (props) => {
  // let totalAmountMacrosforFoods = 0;
  // let totalMacrosStored =
  //   props.storedTotals[0].Carb +
  //   props.storedTotals[0].Protein +
  //   props.storedTotals[0].Fat;
  // for (let food of props.foods) {
  //   let carb = Number(food.carb);
  //   let protein = Number(food.protein);
  //   let fat = Number(food.fat);
  //   let foodTotal = carb + protein + fat;
  //   totalAmountMacrosforFoods += foodTotal;
  // }
  // if (totalAmountMacrosforFoods > totalMacrosStored) {
  //   props.foods.length = 0;
  // }
  return props.foods.length ? (
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
        {props.foods.map((food, i) => (
          <>
            <Food food={food} id={food.id} key={food.id} {...props}></Food>
            {i < props.foods.length - 1 && <mui.Divider />}
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
};
export default FoodList;
