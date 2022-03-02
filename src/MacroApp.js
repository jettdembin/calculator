import React from "react";
import * as mui from "./mui";
import GoalCalculation from "./GoalCalculation";
import LogItems from "./LogItems";

import { StateProvider } from "./contexts/StateContext";

function MacroApp(props) {
  return (
    <mui.Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <mui.AppBar color="primary" position="static" style={{ height: "64px" }}>
        <mui.Toolbar>
          <mui.Typography color="inherit">Macro Calculator</mui.Typography>
        </mui.Toolbar>
      </mui.AppBar>
      <mui.Grid container>
        <mui.Grid item xs={11} md={8} sm={4} style={{ margin: "auto" }}>
          <mui.Paper>
            <StateProvider>
              <GoalCalculation />
            </StateProvider>
          </mui.Paper>
          <mui.Paper>
            <StateProvider>
              <LogItems />
            </StateProvider>
          </mui.Paper>
        </mui.Grid>
      </mui.Grid>
    </mui.Paper>
  );
}
export default MacroApp;
