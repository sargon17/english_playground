import react from "react";
import "../../dist/css/WordToWite.css";

export default function WordToWrite() {
  return (
    <div className="wtw_container">
      <div className="wtw_title-container">
        <h3 className="wtw_title">Words to write</h3>
        <p className="wtw_subtitle">
          Input here the words you want to train separated by coma. Click on tag
          to delete the word.
        </p>
      </div>
      <div className="wtw_input-container">
        <div className="textarea">
          <span className="wtw_input-word"> interview </span>
          <span className="wtw_input-word"> interview </span>
          <span className="wtw_input-word"> interview </span>
          <span className="wtw_input-word"> interview </span>
          <input type="text" className="wtw_input" placeholder="Input here" />
        </div>
      </div>
    </div>
  );
}
