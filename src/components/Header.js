import React from "react";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";

export default function Header({ isAnyGameActive, activeGame }) {
  // console.log("isAnyGameActive =>", isAnyGameActive);
  // console.log("activeGame =>", activeGame);

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        backgroundColor: "grey.dark_hover",
        zIndex: "2",
      }}
    >
      <Container maxWidth="xxl">
        {isAnyGameActive && (
          <Typography
            variant="h4"
            color={"grey.lighter"}
            sx={{
              position: "relative",
              zIndex: "2",
            }}
          >
            English Playground
          </Typography>
        )}
        <Typography
          variant="title"
          color={"grey.normal_active"}
          sx={{
            position: "relative",
            zIndex: "2",
          }}
        >
          {!isAnyGameActive ? "English Playground" : activeGame.name}
        </Typography>
      </Container>
    </Paper>
  );
}
