import React, { useState } from "react";
import "../../dist/css/CustomBtn.css";

export default function CustomBtn({ onClick, content, variant, customStyle }) {
  // let [btnClasses, setBtnClasses] = useState(["custom-btn"]);

  //   ! for some reson, the app crashes when this code is uncommented
  //   ! i need it to develop a better styling for the buttons
  // if (variant === "primary") {
  //   setBtnClasses((prev) => [...prev, "custom-btn-prymary"]);
  // }

  let btnClasses = ["custom-btn"];
  if (variant) {
    btnClasses.push(`custom-btn-${variant}`);
  }

  return (
    <button
      className={btnClasses.join(" ")}
      style={customStyle}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
