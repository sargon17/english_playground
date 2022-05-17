import react from "react";
import "../../dist/css/WordTag.css";

export default function WordTag({ word, onClick }) {
  return (
    <div className="word-tag" onClick={onClick}>
      <span>{word}</span>
    </div>
  );
}
