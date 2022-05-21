import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import MenuCard from "./MenuCard";
import { Container } from "@mui/material";
import WritingExercise from "./WritingExercise";
import Header from "./Header/Header";
import useLocalStorage from "@d2k/react-localstorage";

import { useSelector, useDispatch } from "react-redux";
import {
  setWordsToWriteRedux,
  selectWordsToWrite,
} from "../features/gameData/gameDataSlice";

export default function Main() {
  const wtw = useSelector(selectWordsToWrite);
  const dispatch = useDispatch();

  const [wordsToWrite, setWordsToWrite, removeWordsToWrite] = useLocalStorage(
    "wordsToWrite",
    ["interview", "house", "car"]
  );

  let [games, setGames] = useState([
    {
      name: "Writing Exercise",
      description: "Write the word",
      id: "writing-exercise",
      component: WritingExercise,
      isActive: false,
    },
  ]);

  let isAnyGameActive = games.some((game) => game.isActive);
  let activeGame = games.find((game) => game.isActive);

  useEffect(() => {
    downloadData();
  }, [wordsToWrite]);

  // console.log("wordsToWrite", wordsToWrite);
  // console.log("wtw", wtw);

  function downloadData() {
    console.log("downloadData");

    download();

    async function download() {
      try {
        const response = await wordsToWrite;
        if (response !== undefined) {
          dispatch(setWordsToWriteRedux([...wordsToWrite]));
        } else {
          setTimeout(() => {
            download();
          }, 1000);
        }
        console.log("response", response);

        console.log("redux", wtw);
      } catch (error) {
        console.log("error", error);
      }
    }
  }

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
          <game.component key={game.id} close={closeAllGames} />
        )
      );
    });
  }

  return (
    <div>
      <Header isAnyGameActive={isAnyGameActive} activeGame={activeGame} />
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
