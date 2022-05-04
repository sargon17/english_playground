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
  let [isWordCorrect, setIsWordCorrect] = useState(false);
  let [resultArray, setResultArray] = useState([]);
  let input = useRef(null);

  function checkWord(word) {
    word = word.toLowerCase().trim();
    if (word === wordToWrite) {
      setIsWordCorrect(true);
      setCorrectAnswersNumber(correctAnswersNumber + 1);
      addPoints(true);
      //   word = "";
      console.log(correctAnswersNumber);
    } else {
      addPoints(false);
      setIsWordCorrect(false);
    }
    cleanInput();
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
            <Box>
              <Typography variant="title2" color={"grey.normal"}>
                {resultArray.map((item, index) => {
                  return <img key={index} src={item} alt="check" />;
                })}
              </Typography>
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
                // inputRef={input}
                // ref={input}
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
