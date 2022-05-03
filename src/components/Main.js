import React from "react";
import Grid from "@mui/material/Grid";
import MenuCard from "./MenuCard";
import { Container } from "@mui/material";

export default function Main() {
  return (
    <div>
      <Container
        maxWidth="xxl"
        sx={{
          margin: "40px 0",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MenuCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
