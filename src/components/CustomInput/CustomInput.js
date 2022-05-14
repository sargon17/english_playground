import react, { useState } from "react";
import "../../dist/css/CustomInput.css";

export default function CustomInput({ onClick, currentWord }) {
  let [inputClasses, setInputClasses] = useState(["custom-input"]);

  // Function that displays the result of the user's input changing the color of the input
  function displayStatus(e) {
    // set the input class to display the result of the user's input
    if (e.target.value.trim().toLowerCase() === currentWord) {
      setInputClasses(["custom-input", "custom-input-correct"]);
    } else {
      setInputClasses(["custom-input", "custom-input-incorrect"]);
    }
    // clean the classes of the input to display the default style
    setTimeout(() => {
      setInputClasses(["custom-input"]);
    }, 500); // ! IMPORTANT: the timeout is set to 500ms to avoid the input to be displayed with the wrong color
    // ! if the duration of the animaton change, need to change the timeout too
  }

  return (
    <>
      <input
        type="text"
        className={inputClasses.join(" ")}
        placeholder="Input here"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            displayStatus(e);
            onClick(e);
          }
        }}
      />
    </>
  );
}
