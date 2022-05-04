import React, { useState, useRef } from "react";
import { Box } from "@mui/system";
import { capitalize, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Input } from "@mui/material";
import check from "./../assets/check-circle-fill.svg";
import xCircle from "./../assets/x-circle-fill.svg";

export default function WritingExercise() {
  let wordToWrite = "advertisement";
  let [correctAnswersNumber, setCorrectAnswersNumber] = useState(0);
  let [resultArray, setResultArray] = useState([]);
  let [totalRepeats, setTotalRepeats] = useState(20);
  let input = useRef(null);

  function checkWord(word) {
    word = word.toLowerCase().trim();
    if (word === wordToWrite) {
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
    if (correctAnswersNumber >= totalRepeats) {
      endGame();
    }
  }

  function endGame() {
    setResultArray([]);
    setCorrectAnswersNumber(0);
    setTotalRepeats(20);
  }

  function addPoints(isCorrect) {
    if (isCorrect) {
      setResultArray([...resultArray, check]);
    } else {
      setResultArray([...resultArray, xCircle]);
    }
  }

  function cleanInput() {
    console.log(input.current.value);
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
            <Typography
              variant="title"
              color={"grey.lighter"}
              textAlign={"center"}
            >
              {capitalize(wordToWrite)}
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
              }}
            >
              {resultArray.map((item, index) => {
                return <img key={index} src={item} alt="check" />;
              })}
            </Box>
            <Box
              sx={{
                width: "60%",
                margin: "20px auto",
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
