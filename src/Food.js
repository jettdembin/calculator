import React, { useContext, useState } from "react";
import * as mui from "./mui";
import EditFoodForm from "./EditFoodForm";

import { StateContext } from './contexts/StateContext';
import { FoodColorContext } from './contexts/FoodColorContext';

function Food(props) {
  const food = props.food;
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const { remaining, handleMacro, storedTotals, removeFood } = useContext(StateContext);
  const { toggleColor } = useContext(FoodColorContext);

  let remainingCarb = remaining[0].Carb;
  let remainingProtein = remaining[0].Protein;
  let remainingFat = remaining[0].Fat;

  return (
    <mui.ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <>
          <EditFoodForm
            id={food.id}
            item={food.item}
            toggleEdit={toggleEdit}
          />
        </>
      ) : (
        <>
          <mui.ListItemText>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "20px",
                }}
              >
                {food.item}
              </div>
              <div
                style={{
                  display: "grid",
                  width: "150px",
                  margin: "auto",
                  gridTemplateColumns: "1fr 1fr 1fr",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  {food.carb ? food.carb : "0"}
                </div>
                <div style={{ textAlign: "center" }}>
                  {food.protein ? food.protein : "0"}
                </div>
                <div style={{ textAlign: "center" }}>
                  {food.fat ? food.fat : "0"}
                </div>
              </div>
            </div>
          </mui.ListItemText>
          <mui.ListItemSecondaryAction style={{ width: "80px" }}>
            <mui.IconButton
              style={{ width: "40px", textAlign: "center" }}
              onClick={() => {
                if (
                  remainingCarb + Number(food.carb) >
                  storedTotals[0].Carb
                ) {
                  handleMacro(storedTotals[0].Carb, "Carb");
                } else {
                  handleMacro(remainingCarb + Number(food.carb), "Carb");
                }
                if (
                  remainingProtein + Number(food.protein) >
                  storedTotals[0].Protein
                ) {
                  handleMacro(storedTotals[0].Protein, "Protein");
                } else {
                  handleMacro(
                    remainingProtein + Number(food.protein),
                    "Protein"
                  );
                }
                if (
                  remainingFat + Number(food.fat) >
                  storedTotals[0].Fat
                ) {
                  handleMacro(storedTotals[0].Fat, "Fat");
                } else {
                  handleMacro(remainingFat + Number(food.fat), "Fat");
                }
                removeFood(food.id);
                toggleColor(food.carb, food.protein, food.fat, 3);
              }}
              aria-label="Delete"
            >
              <mui.DeleteForeverIcon></mui.DeleteForeverIcon>
            </mui.IconButton>
            <mui.IconButton
              style={{ width: "40px", textAlign: "center" }}
              onClick={toggleEdit}
              aria-label="Edit"
            >
              <mui.EditIcon></mui.EditIcon>
            </mui.IconButton>
          </mui.ListItemSecondaryAction>
        </>
      )}
    </mui.ListItem>
  );
}
export default Food;
