import React from "react";
// import blopGreenLg from "../assets/green-blops/blop-green-lg.svg";
// import blopGreenMd from "../assets/green-blops/blop-green-md.svg";
// import blopGreenSm from "../assets/green-blops/blop-green-sm.svg";
import "../dist/css/blops.css";

export default function Blops({ blops, position }) {
  // Debugging purposes
  if (!position) {
    console.log("no position");
    return null;
  } else if (!blops) {
    console.log("no blops");
    return null;
  }

  let blopsStyles = {
    position: "absolute",
    // transform: `translate(-${position[0]}%, -${position[1]}%)`,
    ...position,
  };

  //style={blopsStyles}
  // console.log("blopsStyles =>", blopsStyles);
  const blopsArray = blops.map((blop, index) => {
    return (
      <div key={index} className="blop__container" style={blopsStyles}>
        <img src={blop} alt="blop" className="blop" />
      </div>
    );
  });

  return <div className="blops__container">{blopsArray}</div>;
}
