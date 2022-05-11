import react from "react";
import "../../dist/css/CustomInput.css";

export default function CustomInput({ onChange, onClick }) {
  let inputStyle = {
    background: "grey.dark_hover",
  };

  return (
    <>
      <input
        type="text"
        className="custom__input"
        style={inputStyle}
        placeholder="Input here"
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onClick(e.target.value);
            e.target.value = "";
          }
        }}
      />
    </>
  );
}
