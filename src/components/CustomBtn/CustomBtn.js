import react, { useState } from "react";
import "../../dist/css/CustomBtn.css";

export default function CustomBtn({ onClick, content, variant }) {
  let [btnClasses, setBtnClasses] = useState(["custom-btn"]);
  //   let btnClasses = ["custom-btn", "custom-btn-outline"];

  return (
    <>
      <button className={btnClasses.join(" ")} onClick={onClick}>
        {content}
      </button>
    </>
  );
}
