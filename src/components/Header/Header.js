import React from "react";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import "../../dist/css/Header.css";

export default function Header({ isAnyGameActive, activeGame }) {
  // console.log("isAnyGameActive =>", isAnyGameActive);
  // console.log("activeGame =>", activeGame);

  let titleStyle = {
    fontSize: "2rem",
  };

  if (isAnyGameActive) {
    titleStyle = {
      fontSize: "1rem !important",
      fontWeight: 400,
      opacity: 0.5,
      "@media (min-width:600px)": {
        fontSize: "1.618rem !important",
        fontWeight: 600,
      },
      // transform: "translateY(-1rem)",
    };
  }

  let gameTitleStyle = {
    fontSize: "1.618rem",
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        backgroundColor: "grey.dark_hover",
        zIndex: "3",
      }}
    >
      <Container
        maxWidth="xxl"
        sx={{
          height: "12vh",
          maxHeight: "12vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="title"
          color={!isAnyGameActive ? "grey.normal_active" : "grey.light_active"}
          sx={{
            position: "relative",
            zIndex: "2",
            transition: "all 0.5s ease-in-out",
            ...titleStyle,
          }}
        >
          English Playground
        </Typography>
        <Typography
          variant="title"
          color={!isAnyGameActive ? "grey.normal_active" : "grey.light_hover"}
          sx={{
            position: "relative",
            zIndex: "2",
            transition: "all 0.5s ease-in-out",
            ...gameTitleStyle,
          }}
        >
          {activeGame ? activeGame.name : ""}
        </Typography>
      </Container>
    </Paper>
  );
}
