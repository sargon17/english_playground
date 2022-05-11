import React, { useState, useRef } from "react";
import { Box } from "@mui/system";
import { capitalize, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Input } from "@mui/material";
import check from "./../assets/check-circle-fill.svg";
import xCircle from "./../assets/x-circle-fill.svg";
import wordsData from "./../data/writingEx_data.json";
import { IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Blops from "./Blops";
import ProgressCounter from "./ProgressCounter/ProgressCounter";
import CustomInput from "./CustomInput/CustomInput";

import blopRedLg from "./../assets/red-blops/blop-red-lg.svg";
import blopRedMd from "./../assets/red-blops/blop-red-md.svg";
import blopRedSm from "./../assets/red-blops/blop-red-sm.svg";

export default function WritingExercise({ close, mousePosition }) {
  let [correctAnswersNumber, setCorrectAnswersNumber] = useState(0);
  let [resultArray, setResultArray] = useState([]);
  let [totalRepeats, setTotalRepeats] = useState(20);
  let words = wordsData;
  let theWord = setTheWord();
  let [currentWord, setCurrentWord] = useState(theWord);
  let input = useRef(null);
  let [inputValue, setInputValue] = useState("");

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function selectTheWord() {
    // console.log("word =>", currentWord);
    // console.log("words before =>", words);
    words.splice(words.indexOf(currentWord), 1);
    // console.log("words after =>", words);
    let randomNumber = Math.floor(Math.random() * words.length);
    setCurrentWord(() => words[randomNumber]);
  }

  function setTheWord() {
    let randomNumber = Math.floor(Math.random() * words.length);
    return words[randomNumber];
  }

  function checkWord(word) {
    word = word.toLowerCase().trim();
    if (word === currentWord) {
      setCorrectAnswersNumber(correctAnswersNumber + 1);
      addPoints(true);
      checkCorrectsTimes();
    } else {
      addPoints(false);
      setTotalRepeats(totalRepeats + 2);
    }
    cleanInput();
  }

  function checkCorrectsTimes() {
    if (correctAnswersNumber + 1 >= totalRepeats) {
      // console.log("correctAnswersNumber", correctAnswersNumber);
      // console.log("totalRepeats", totalRepeats);
      endGame();
    }
  }

  function endGame() {
    setResultArray([]);
    setCorrectAnswersNumber(0);
    setTotalRepeats(20);
    selectTheWord();
  }

  function addPoints(isCorrect) {
    if (isCorrect) {
      setResultArray([...resultArray, check]);
    } else {
      setResultArray([...resultArray, xCircle]);
    }
  }

  function cleanInput() {
    // console.log(input.current.value);
    input.current.value = "";
  }

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.8)",
        }}
      >
        <Paper elevation={4}>
          <Box
            sx={{
              backgroundColor: "grey.dark",
              borderRadius: "11px",
              width: "95%",
              height: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: "55%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "0%",
                right: "0%",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // cursor: "pointer",
                zIndex: "10",
                overflow: "hidden",
              }}
            >
              <IconButton
                onClick={() => close()}
                sx={{
                  color: "grey.lighter",
                  "&:hover": {
                    backgroundColor: "grey.normal_active",
                  },
                }}
              >
                <CloseRoundedIcon
                  sx={{
                    color: "grey.light_active",
                  }}
                />
              </IconButton>
            </Box>
            <Blops
              blops={[blopRedLg, blopRedMd, blopRedSm]}
              position={{ top: "100%", left: "100%" }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "0%",
                right: "0%",
                zIndex: "1",
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                overflow: "hidden",
                padding: "0px 10px",
              }}
            >
              <Typography
                variant="points"
                sx={{
                  color: "grey.normal_active",
                }}
              >
                <ProgressCounter
                  progress={correctAnswersNumber}
                  maxprogress={totalRepeats}
                />
                {/* {correctAnswersNumber + "/" + totalRepeats} */}
              </Typography>
            </Box>
            <Box
              sx={{
                zIndex: "2",
                width: "100%",
                height: "100%",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  margin: "50px 0",
                }}
              >
                <Typography
                  variant="title"
                  color={"grey.lighter"}
                  textAlign={"center"}
                >
                  {/* {theWord ? theWord : selectTheWord()} */}
                  {capitalize(currentWord ? currentWord : "end")}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "auto",
                    marginTop: "20px",
                    gap: "10px",
                    flexWrap: "wrap",
                    maxWidth: "600px",
                    minHeight: "24px",
                  }}
                >
                  {resultArray.map((item, index) => {
                    return <img key={index} src={item} alt="check" />;
                  })}
                </Box>
              </Box>
              <Box
                sx={{
                  width: "60%",
                  margin: "100px auto",
                }}
              >
                <CustomInput onChange={handleInputChange} onClick={checkWord} />
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
