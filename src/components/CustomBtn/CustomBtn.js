import react, { useState } from "react";
import "../../dist/css/CustomBtn.css";

export default function CustomBtn({ onClick, content, variant }) {
  let [btnClasses, setBtnClasses] = useState(["custom-btn"]);

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
