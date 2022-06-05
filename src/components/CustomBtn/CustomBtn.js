import React from "react";
import "../../dist/css/CustomBtn.css";

export default function CustomBtn({ onClick, content, variant, customStyle }) {
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
