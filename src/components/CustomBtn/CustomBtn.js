import React, { useState } from "react";
import "../../dist/css/CustomInput.css";

export default function CustomBtn({ onClick, content, variant }) {
  let [btnClasses, setBtnClasses] = useState([
    "custom-btn, custom-btn-outline",
  ]);

  return (
    <>
      <button className={btnClasses.join(" ")} onClick={onClick}>
        {content}
      </button>
    </>
  );
}
