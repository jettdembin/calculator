import React from "react";
import "./GoalOptions.css";
import GoalBtn from "./GoalBtn/GoalBtn";

const GoalOptions = (props) => {
  return (
    <section className="Goal-cntr">
      <div className="Goal-wrapper">
        <div className="Goal">
          <h4>Cut</h4>
          <GoalBtn
            id={12}
            {...props}
            percentCarb={4}
            percentProtein={4}
            percentFat={2}
          />
        </div>
      </div>
      <div className="Goal-wrapper">
        <div className="Goal">
          <h4>Maintain</h4>
          <GoalBtn
            id={15}
            {...props}
            percentCarb={5}
            percentProtein={2}
            percentFat={3}
          />
        </div>
      </div>
      <div className="Goal-wrapper">
        <div className="Goal">
          <h4>Bulk</h4>
          <GoalBtn
            id={18}
            {...props}
            percentCarb={5}
            percentProtein={1.5}
            percentFat={3.5}
          />
        </div>
      </div>
    </section>
  );
};

export default GoalOptions;
