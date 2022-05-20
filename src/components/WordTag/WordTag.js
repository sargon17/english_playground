import React from "react";
import "../../dist/css/WordTag.css";
import CancelIcon from "@mui/icons-material/Cancel";

export default function WordTag({ word, onClick }) {
  return (
    <div className="word-tag" onClick={onClick}>
      <CancelIcon
        sx={{
          color: "grey.light_hover",
        }}
        classes={{ root: "cancel-icon" }}
      />
      <span>{word}</span>
    </div>
  );
}
