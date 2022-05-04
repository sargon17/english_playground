import React, { useState, useRef } from "react";
import { Box } from "@mui/system";
import { capitalize, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Input } from "@mui/material";

export default function WritingExercise() {
  let wordToWrite = "advertisement";
  let [correctAnswersNumber, setCorrectAnswersNumber] = useState(0);
  let [isWordCorrect, setIsWordCorrect] = useState(false);
  let input = useRef(null);

  function checkWord(word) {
    word = word.toLowerCase().trim();
    if (word === wordToWrite) {
      setIsWordCorrect(true);
      setCorrectAnswersNumber(correctAnswersNumber + 1);
      //   word = "";
      console.log(correctAnswersNumber);
      cleanInput();
    } else {
      setIsWordCorrect(false);
    }
  }

  //   if (isWordCorrect) {
  //     cleanInput();
  //   }
  function cleanInput() {
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
                {isWordCorrect ? "Correct!" : "Incorrect!"}
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
                // onChange={(e) => {
                //   checkWord(e.target.value);
                // }}
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
                inputRef={input}
              />
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
