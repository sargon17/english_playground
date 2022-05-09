import react from "react";
import blopGreenLg from "../assets/green-blops/blop-green-lg.svg";
import blopGreenMd from "../assets/green-blops/blop-green-md.svg";
import blopGreenSm from "../assets/green-blops/blop-green-sm.svg";
import "../dist/css/blops.css";

export default function Blops({ mouse }) {
  //animate blop position on mouse move
  //   const [blopPosition, setBlopPosition] = react.useState({
  //     x: 0,
  //     y: 0,
  //   });
  // window size
  let windowSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  return (
    <div className="blops__container">
      <div
        className="blop__container blop-lg"
        // style={{
        //   top: `${12 - (mouse.y * 100) / windowSize.height / 100}%`,
        //   left: `${12 - (mouse.x * 100) / windowSize.width / 100}%`,
        // }}
      >
        <img src={blopGreenLg} alt="blop" />
      </div>
      <div
        className="blop__container blop-md"
        // style={{
        //   top: `${10 + (mouse.y * 100) / windowSize.height / 100}%`,
        //   left: `${10 + (mouse.x * 100) / windowSize.width / 100}%`,
        // }}
      >
        <img
          src={blopGreenMd}
          alt="blop"
          // style={{
          //   backgroundShadow: `${mouse.x / windowSize.width}px ${
          //     mouse.y / windowSize.height
          //   }px 0px 0px rgba(0,0,0,0.5)`,
          // }}
        />
      </div>
      <div
        className="blop__container blop-sm"
        // style={{
        //   top: `${8 + (mouse.y * 100) / windowSize.height / 100}%`,
        //   left: `${10 - (mouse.x * 100) / windowSize.width / 50}%`,
        // }}
      >
        <img src={blopGreenSm} alt="blop" />
      </div>
    </div>
  );
}
