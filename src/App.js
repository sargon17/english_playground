import { Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import classicTheme from "./Themes/ClassicTheme";

import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={classicTheme}>
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            minHeight: "100vh",
            backgroundColor: "grey.dark_hover",
            borderRadius: "0",
            margin: "0",
          }}
        >
          <Header />
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
