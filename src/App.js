import React from "react";
import { Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import classicTheme from "./Themes/ClassicTheme";
import "./dist/css/general.css";

import Main from "./components/Main";
import Blops from "./components/Blops";

import blopGreenLg from "./assets/green-blops/blop-green-lg.svg";
import blopGreenMd from "./assets/green-blops/blop-green-md.svg";
import blopGreenSm from "./assets/green-blops/blop-green-sm.svg";

function App() {
  return (
    <div className="App">
      <Blops
        blops={[blopGreenLg, blopGreenMd, blopGreenSm]}
        position={{ top: "10%", left: "10%" }}
      />
      <ThemeProvider theme={classicTheme}>
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            minHeight: "100vh",
            backgroundColor: "grey.dark_hover",
            borderRadius: "0",
            margin: "0",
            zIndex: "2",
          }}
        >
          <Main />
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
