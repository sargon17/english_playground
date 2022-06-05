import React, { useEffect, useState, useMemo, useRef } from "react";
import "../../dist/css/WordToWite.css";
import useLocalStorage from "@d2k/react-localstorage";

import CustomBtn from "../CustomBtn/CustomBtn";
import Notification from "../Notification/Notification";
import WordTag from "../WordTag/WordTag";

import compareArrays from "../../utlities/compareArrays";
import _normalizeWord from "../../utlities/normalizeWord";
import _cleanInputField from "../../utlities/cleanInputFiled";

// redux store
import { useSelector, useDispatch } from "react-redux";
import {
  setWordsToWriteRedux,
  selectWordsToWrite,
} from "../../features/gameData/gameDataSlice";

export default function WordToWrite() {
  const [wordsToWrite, setWordsToWrite, removeWordsToWrite] = useLocalStorage(
    "wordsToWrite",
    []
  );

  const wtw = useSelector(selectWordsToWrite);
  const dispatch = useDispatch();

  // state of the words list to render
  let [displayedWords, setDisplayedWords] = useState([]);
  let anotherList;
  // states of notifications
  let [isNotificationActive, setIsNotificationActive] = useState(false);
  let [notification, setNotification] = useState({
    message: "",
    type: "",
    position: "",
    duration: "",
  });
  let input = useRef(null);

  anotherList = useMemo(() => {
    return [...wtw];
  }, [wtw]);

  useEffect(() => {
    renderWordsToWrite();
  }, []);

  function renderWordsToWrite() {
    setDisplayedWords(() => [
      anotherList.map((word, index) => {
        return (
          <WordTag
            key={index}
            word={word}
            onClick={(e) => removeWord(e.target.innerText)}
          />
        );
      }),
    ]);
  }

  // function that removes word from word list and renders the remaining words
  function removeWord(word) {
    anotherList = anotherList.filter((item) => item !== word);
    renderWordsToWrite();
    saveWords();
  }

  function saveWords() {
    dispatch(setWordsToWriteRedux(anotherList));
    setWordsToWrite([...anotherList]);
  }

  // function checks if words are saved or not and displays notification accordingly
  function checkSaveWords() {
    // console.log("checkSaveWords", wtw, anotherList);
    if (compareArrays(wtw, anotherList)) {
      displayNotification("Saved Correctly", "success", "center", 1000);
    } else {
      displayNotification("Error Saving", "error", "center", 1000);
    }
  }

  function displayNotification(message, type, position, duration) {
    setNotification({
      message: message,
      type: type,
      position: position,
      duration: duration,
    });
    setIsNotificationActive(true);

    setTimeout(() => {
      setIsNotificationActive(false);
    }, duration + 500);
  }

  function createTag() {
    // console.log("createTag", input.current.value);
    let word = input.current.value;
    _cleanInputField(input);

    // check if the word is empty or already exists in the list
    if (word === "" || anotherList.includes(word)) {
      return;
    }

    // upd the list
    anotherList = [...anotherList, _normalizeWord(word)];
    saveWords();
    renderWordsToWrite();
  }

  return (
    <div className="wtw_container">
      <div className="wtw_title-container">
        <h3 className="wtw_title">Words to write</h3>
        <p className="wtw_subtitle">
          Input here the words you want to train. Click on tag to delete the
          word.
        </p>
      </div>
      <div className="wtw_input-container">
        <div
          className="textarea"
          onClick={(e) => {
            // automatically select the input
            if (e.target.querySelector(".wtw_input")) {
              e.target.querySelector(".wtw_input").focus();
            }
          }}
        >
          {displayedWords}
          <input
            type="text"
            className="wtw_input"
            placeholder="Write here..."
            ref={input}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                createTag();
              }
            }}
          />
        </div>
      </div>
      <CustomBtn
        content="Save"
        // variant="primary"
        onClick={() => {
          createTag();
          checkSaveWords();
          // saveWords();
          // checkSaveWords();
        }}
      />

      {isNotificationActive && (
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
