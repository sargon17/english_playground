import React, { useState, useEffect } from "react";
import "../../dist/css/CustomInput.css";
import _normalizeWord from "../../utlities/normalizeWord";

export default function CustomInput({
  handleWriting,
  checkWord,
  currentWord,
  isDisabled,
}) {
  let [inputClasses, setInputClasses] = useState(["custom-input"]);
  let [inputPlaceholder, setInputPlaceholder] = useState("Write here...");

  // Function that displays the result of the user's input changing the color of the input
  function displayStatus(e) {
    // set the input class to display the result of the user's input
    setInputClasses([
      "custom-input",
      _normalizeWord(e.target.value) === currentWord
        ? "custom-input-correct"
        : "custom-input-incorrect",
    ]);
    // clean the classes of the input to display the default style
    setTimeout(() => {
      setInputClasses(["custom-input"]);
    }, 500); // ! IMPORTANT: the timeout is set to 500ms to avoid the input to be displayed with the wrong color
    // ! if the duration of the animation change, need to change the timeout too
  }

  // check for the custom placeholder
  useEffect(() => {
    setInputPlaceholder(isDisabled ? isDisabled : "Write here...");
  }, [isDisabled]);

  return (
    <>
      <input
        type="text"
        className={inputClasses.join(" ")}
        placeholder={inputPlaceholder}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            displayStatus(e);
            checkWord();
          }
        }}
        onChange={(e) => {
          handleWriting(e);
        }}
        disabled={isDisabled.length ? true : false}
      />
    </>
  );
}
