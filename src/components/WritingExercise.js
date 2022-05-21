import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { capitalize, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import check from "./../assets/check-circle-fill.svg";
import xCircle from "./../assets/x-circle-fill.svg";
import wordsData from "./../data/writingEx_data.json";
import { IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import useLocalStorage from "@d2k/react-localstorage";

// Icons
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

// Utils
import checkScrollPosition from "../utlities/checkScrollPosition";

// Components
import Blops from "./Blops";
import ProgressCounter from "./ProgressCounter/ProgressCounter";
import CustomInput from "./CustomInput/CustomInput";
import WordToWrite from "./WordToWrite/WordToWrite";

import blopRedLg from "./../assets/red-blops/blop-red-lg.svg";
import blopRedMd from "./../assets/red-blops/blop-red-md.svg";
import blopRedSm from "./../assets/red-blops/blop-red-sm.svg";

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  // setWordsToWriteRedux,
  selectWordsToWrite,
} from "../features/gameData/gameDataSlice";

export default function WritingExercise({ close, mousePosition }) {
  // const [wordsToWrite, setWordsToWrite, removeWordsToWrite] = useLocalStorage(
  //   "wordsToWrite",
  //   []
  // );

  const wtw = useSelector(selectWordsToWrite);

  // console.log(wordsToWrite);
  let [correctAnswersNumber, setCorrectAnswersNumber] = useState(0);
  let [resultArray, setResultArray] = useState([]);
  let [totalRepeats, setTotalRepeats] = useState(20);
  // let words = wordsData;
  // let words = wordsToWrite ? wordsToWrite : [];
  let [words, setWords] = useState(wtw ? wtw : []);
  let theWord = setTheWord();
  let [currentWord, setCurrentWord] = useState(theWord);
  let [isWtwOpen, setIsWtwOpen] = useState(false);

  // conditioned styles
  let addIconStyle = {};
  let addBtnStyle = {};
  if (isWtwOpen) {
    addIconStyle = {
      transform: "rotate(135deg)",
      color: "#ef6f6c",
    };
    addBtnStyle = {
      "&:hover": {
        backgroundColor: "#ef6e6c2f",
        "& svg": {
          color: "#ef6f6c",
        },
      },
    };
  }

  useEffect(() => {
    if (!wtw.includes(currentWord)) {
      try {
        setWords(wtw);
        theWord = setTheWord();
        setCurrentWord(theWord);
        // selectTheWord();
      } catch (error) {
        console.log("error", error);
      }
    }
  }, [!isWtwOpen]);

  // console.log(words);

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

  function checkWord(element) {
    // console.log("element =>", element);
    let word = element.target.value;
    word = word.toLowerCase().trim();
    if (word === currentWord) {
      setCorrectAnswersNumber(correctAnswersNumber + 1);
      addPoints(true);
      checkCorrectsTimes();
    } else {
      addPoints(false);
      setTotalRepeats(totalRepeats + 2);
    }
    cleanInput(element);
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

  function cleanInput(element) {
    element.target.value = "";
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
              {/*Close button*/}
              <IconButton
                onClick={() => {
                  close();
                  checkScrollPosition();
                }}
                sx={{
                  color: "grey.lighter",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "grey.normal_active",
                    "& svg": {
                      color: "grey.light_active",
                    },
                  },
                }}
              >
                <CloseRoundedIcon
                  sx={{
                    color: "grey.normal",
                    transition: "all 0.3s ease-in-out",
                  }}
                />
              </IconButton>
            </Box>
            {/*Blops => */}
            <Blops
              blops={[blopRedLg, blopRedMd, blopRedSm]}
              position={{ top: "100%", left: "100%" }}
            />
            {/* / Blops */}
            {/* Progress counter Container => */}
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
              <ProgressCounter
                progress={correctAnswersNumber}
                maxprogress={totalRepeats}
              />
            </Box>
            {/* / Progress counter Container */}
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
                <Box
                  sx={{
                    width: "60%",
                    margin: "4rem auto",
                    "@media (max-width: 768px)": {
                      width: "90%",
                      margin: "2rem auto",
                    },
                  }}
                >
                  <Typography
                    variant="cardText"
                    sx={{
                      color: "grey.normal",
                    }}
                  >
                    Automate your writing and learn how to do it faster and more
                    correctly
                  </Typography>
                </Box>
                {/* Current Word Block => */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    wrap: "wrap",
                    maxWidth: "90%",
                    margin: "0 auto",
                  }}
                >
                  {/* Add Words Icon => */}
                  <IconButton
                    sx={{
                      color: "grey.lighter",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        backgroundColor: "grey.normal_active",
                        "& svg": {
                          color: "grey.light_active",
                        },
                      },
                      ...addBtnStyle,
                    }}
                    onClick={() => {
                      setIsWtwOpen((prev) => !prev);
                    }}
                  >
                    <AddCircleRoundedIcon
                      fontSize="small"
                      sx={{
                        color: "grey.normal_active",
                        transition: "all 0.3s ease-in-out",
                        ...addIconStyle,
                      }}
                    />
                  </IconButton>
                  {isWtwOpen && <WordToWrite />}

                  {/* / Add Words Icon */}
                  {/* Current Word => */}
                  <Typography
                    variant="title"
                    color={"grey.lighter"}
                    textAlign={"center"}
                  >
                    {capitalize(currentWord ? currentWord : "end")}
                  </Typography>
                  {/* / Current Word */}
                  {/* / Current Word Block */}
                </Box>
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
                    "@media (max-width: 768px)": {
                      gap: "4px",
                      mmargin: "1rem auto",
                      "& > img": {
                        width: "18px",
                        height: "18px",
                      },
                    },
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
                  "@media (max-width: 600px)": {
                    width: "98%",
                  },
                }}
              >
                <CustomInput onClick={checkWord} currentWord={currentWord} />
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
