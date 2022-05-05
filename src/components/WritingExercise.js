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

export default function WritingExercise({ close }) {
  let [correctAnswersNumber, setCorrectAnswersNumber] = useState(0);
  let [resultArray, setResultArray] = useState([]);
  let [totalRepeats, setTotalRepeats] = useState(20);
  let words = wordsData;
  let theWord = setTheWord();
  let [currentWord, setCurrentWord] = useState(theWord);
  let input = useRef(null);

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
            top: "0%",
            left: "50%",
            transform: "translateX(-50%)",
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
          <Box
            sx={{
              position: "absolute",
              top: "0%",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: "1",
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <Typography
              variant="points"
              sx={{
                color: "grey.normal_active",
              }}
            >
              {correctAnswersNumber + "/" + totalRepeats}
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
              <Input
                fullWidth
                placeholder="Write the word here"
                variant="outlined"
                disableUnderline
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    checkWord(e.target.value);
                  }
                }}
                sx={{
                  backgroundColor: "grey.dark_hover",
                  textAlign: "center",
                  color: "grey.light_active",
                  borderRadius: "11px",
                  padding: "12px",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  opacity: "0.8",
                }}
                inputRef={(ref) => {
                  input.current = ref;
                }}
              />
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
