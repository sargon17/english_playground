import react, { useState } from "react";
import "../../dist/css/CustomInput.css";

export default function CustomInput({ onClick, currentWord }) {
  let [inputClasses, setInputClasses] = useState(["custom-input"]);

  function displayStatus(e) {
    console.log("e.target.value", e.target.value, "word", currentWord);

    if (e.target.value === currentWord) {
      setInputClasses(["custom-input", "custom-input-correct"]);
    } else {
      setInputClasses(["custom-input", "custom-input-incorrect"]);
    }

    setTimeout(() => {
      setInputClasses(["custom-input"]);
    }, 500);
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
