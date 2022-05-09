import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import MenuCard from "./MenuCard";
import { Container } from "@mui/material";
import WritingExercise from "./WritingExercise";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function Main({ mousePosition }) {
  let [games, setGames] = useState([
    {
      name: "Writing Exercise",
      description: "Write the word",
      id: "writing-exercise",
      component: WritingExercise,
      isActive: false,
    },
  ]);

  function handleClick(game) {
    setGames(
      games.map((item) => {
        if (item.id === game.id) {
          item.isActive = !item.isActive;
        } else {
          item.isActive = false;
        }
        return item;
      })
    );
  }
  function closeAllGames() {
    console.log("closeAllGames");
    setGames(
      games.map((item) => {
        item.isActive = false;
        return item;
      })
    );
  }

  function displayGames() {
    return games.map((game, index) => {
      return (
        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          key={game.id}
          onClick={() => handleClick(game)}
        >
          <MenuCard name={game.name} />
        </Grid>
      );
    });
  }

  function displayGameWindows() {
    return games.map((game, index) => {
      return (
        games[index].isActive && (
          <game.component
            key={game.id}
            close={closeAllGames}
            mousePosition={mousePosition}
          />
        )
      );
    });
  }

  return (
    <div>
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
      <Container
        maxWidth="xxl"
        sx={{
          margin: "40px 0",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <Grid container spacing={3}>
          {displayGames()}
        </Grid>
        {displayGameWindows()}
      </Container>
    </div>
  );
}
