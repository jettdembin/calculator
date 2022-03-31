import React, { useState } from "react";
import * as mui from "../../../../mui";
import EditFoodForm from "./EditFoodForm";

const Food = (props) => {
  const food = props.food;
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  let remainingCarb = props.remaining[0].Carb;
  let remainingProtein = props.remaining[0].Protein;
  let remainingFat = props.remaining[0].Fat;

  return (
    <mui.ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <>
          <EditFoodForm
            {...props}
            allowEdit={props.allowEdit}
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
                  props.storedTotals[0].Carb
                ) {
                  props.handleMacro(props.storedTotals[0].Carb, "Carb");
                } else {
                  props.handleMacro(remainingCarb + Number(food.carb), "Carb");
                }
                if (
                  remainingProtein + Number(food.protein) >
                  props.storedTotals[0].Protein
                ) {
                  props.handleMacro(props.storedTotals[0].Protein, "Protein");
                } else {
                  props.handleMacro(
                    remainingProtein + Number(food.protein),
                    "Protein"
                  );
                }
                if (
                  remainingFat + Number(food.fat) >
                  props.storedTotals[0].Fat
                ) {
                  props.handleMacro(props.storedTotals[0].Fat, "Fat");
                } else {
                  props.handleMacro(remainingFat + Number(food.fat), "Fat");
                }
                props.removeFood(food.id);
                props.toggleColor(food.carb, food.protein, food.fat, 3);
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
};
export default Food;
