import react from "react";
import "../../dist/css/CustomInput.css";

export default function CustomInput() {
  let inputStyle = {
    background: "grey.dark_hover",
  };

  return (
    <>
      <input type="text" className="custom__input" style={inputStyle} />
    </>
  );
}
