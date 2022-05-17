import react, { useEffect, useState } from "react";
import "../../dist/css/WordToWite.css";
import useLocalStorage from "@d2k/react-localstorage";

import CustomBtn from "../CustomBtn/CustomBtn";
import Notification from "../Notification/Notification";
import WordTag from "../WordTag/WordTag";

import compareArrays from "../../utlities/compareArrays";

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
    // console.log("removeWord", word);
    anotherList.splice(anotherList.indexOf(word), 1);
    console.log("anotherList", anotherList);
    renderWordsToWrite();
  }

  function saveWords() {
    setWordsToWrite([...anotherList]);
    checkSaveWords();
  }

  // function checks if words are saved or not and displays notification accordingly
  function checkSaveWords() {
    if (compareArrays(wordsToWrite, anotherList)) {
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
    setIsNotification(true);

    setTimeout(() => {
      setIsNotification(false);
    }, duration + 500);
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
