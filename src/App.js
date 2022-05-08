import react, { useState } from "react";
import { Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import classicTheme from "./Themes/ClassicTheme";
import "./dist/css/general.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Blops from "./components/Blops";

function App() {
  let [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  function getMousePosition(e) {
    // console.log(e.clientX, e.clientY);
    setMouse({
      x: e.clientX,
      y: e.clientY,
    });
    // console.log(mouse.x / window.innerWidth, mouse.y / window.innerHeight);
  }

  return (
    <div className="App" onMouseMove={(e) => getMousePosition(e)}>
      <Blops mouse={mouse} />
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
          <Header />
          <Main mousePosition={mouse} />
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
