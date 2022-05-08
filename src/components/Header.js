import React from "react";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";

export default function Header() {
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
        <Typography
          variant="title"
          color={"grey.normal"}
          sx={{
            position: "relative",
            zIndex: "2",
          }}
        >
          English Playground
        </Typography>
      </Container>
    </Paper>
  );
}
