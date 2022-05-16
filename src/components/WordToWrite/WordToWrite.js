import react, { useEffect, useState } from "react";
import "../../dist/css/WordToWite.css";
import useLocalStorage from "@d2k/react-localstorage";

import CustomBtn from "../CustomBtn/CustomBtn";
import Notification from "../Notification/Notification";
import { BoyRounded } from "@mui/icons-material";

export default function WordToWrite() {
  const [wordsToWrite, setWordsToWrite, removeWordsToWrite] = useLocalStorage(
    "wordsToWrite",
    ["interview", "house", "car"]
  );
  //   let [wordsList, setWordsList] = useState([]);
  let [displayedWords, setDisplayedWords] = useState([]);
  let anotherList = wordsToWrite;
  let [isNotification, setIsNotification] = useState(false);
  let [notification, setNotification] = useState({
    message: "",
    type: "",
    position: "",
    duration: "",
  });

  useEffect(() => {
    console.log("useEffect", wordsToWrite);
    if (wordsToWrite !== undefined) {
      //   setWordsList(() => wordsToWrite);
      anotherList = wordsToWrite;
      //   console.log("hello i'am useEffect", wordsList);
      renderWordsToWrite();
    }
  }, [wordsToWrite]);

  function renderWordsToWrite() {
    setDisplayedWords(() => [
      anotherList.map((word, index) => {
        return (
          <span key={index} className="wtw_input-word">
            {word}
          </span>
        );
      }),
    ]);
  }

  function saveWords() {
    setWordsToWrite([...anotherList]);
    displayNotification("Saved Correctly", "success", "bottom");
  }

  function displayNotification(message, type, position) {
    // Notification(message, type, position);
    setNotification({
      message: message,
      type: type,
      position: position,
      duration: 3000,
    });
    setIsNotification(true);

    setTimeout(() => {
      setIsNotification(false);
    }, 3500);
  }

  return (
    <div className="wtw_container">
      <div className="wtw_title-container">
        <h3 className="wtw_title">Words to write</h3>
        <p className="wtw_subtitle">
          Input here the words you want to train separated by coma. Click on tag
          to delete the word.
        </p>
      </div>
      <div className="wtw_input-container">
        <div
          className="textarea"
          onClick={(e) => {
            // automatically select the input
            e.target.querySelector(".wtw_input").focus();
          }}
        >
          {displayedWords}
          <input
            type="text"
            className="wtw_input"
            placeholder="Write here..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                // setWordsList([...wordsList, e.target.value]);
                anotherList.push(e.target.value.toLowerCase().trim());
                // console.log(wordsList);
                renderWordsToWrite();
                e.target.value = "";
              }
            }}
          />
        </div>
      </div>
      <CustomBtn
        content="Save"
        variant="primary"
        onClick={() => {
          saveWords();
        }}
      />

      {isNotification && (
        <Notification
          message={notification.message}
          type={notification.type}
          position={notification.position}
          duration={notification.duration}
        />
      )}
    </div>
  );
}
