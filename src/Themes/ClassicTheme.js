import { createTheme } from "@mui/material";

const classicTheme = createTheme({
  palette: {
    grey: {
      lighter: "#ABABAB",
      light_hover: "#9B9B9B",
      light_active: "#868686",
      normal: "#454545",
      normal_hover: "#3B3B3B",
      normal_active: "#323232",
      dark: "#181818",
      dark_darker: "#141414",
      dark_hover: "#111111",
      dark_active: "#080808",
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: 400,
    title: {
      fontSize: "1.618rem",
      "@media (min-width: 300px)": {
        fontSize: "2.618rem",
      },
      "@media (min-width:600px)": {
        fontSize: "4.236rem",
      },
      fontWeight: 700,
    },
    title2: {
      fontSize: "1.618rem",
      "@media (min-width:600px)": {
        fontSize: "2.618rem",
      },
      fontWeight: 700,
    },
    points: {
      fontSize: "10.618rem",
      fontWeight: 800,
      color: "grey.light_hover",
      "@media (min-width:600px)": {
        fontSize: "20rem",
      },
    },
  },
});

export default classicTheme;
