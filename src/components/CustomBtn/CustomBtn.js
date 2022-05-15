import react, { useState } from "react";
import "../../dist/css/CustomBtn.css";

export default function CustomBtn({ onClick, content, variant }) {
  let [btnClasses, setBtnClasses] = useState(["custom-btn"]);

  //   ! for some reson, the app crashes when this code is uncommented
  //   ! i need it to develop a better styling for the buttons
  //   if (variant === "primary") {
  //     setBtnClasses(["custom-btn", "custom-btn-prymary"]);
  //   }

  return (
    <>
      <button className={btnClasses.join(" ")} onClick={onClick}>
        {content}
      </button>
    </>
  );
}
