import react from "react";
import "../../dist/css/CustomInput.css";

export default function CustomInput({ onClick }) {
  return (
    <>
      <input
        type="text"
        className="custom__input"
        placeholder="Input here"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onClick(e);
          }
        }}
      />
    </>
  );
}
