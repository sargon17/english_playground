import react from "react";
import blopGreenLg from "../assets/green-blops/blop-green-lg.svg";
import blopGreenMd from "../assets/green-blops/blop-green-md.svg";
import blopGreenSm from "../assets/green-blops/blop-green-sm.svg";
import "../dist/css/blops.css";

export default function Blops() {
  return (
    <div className="blops__container">
      <div className="blop__container blop-lg">
        <img src={blopGreenLg} alt="blop" />
      </div>
      <div className="blop__container blop-md">
        <img src={blopGreenMd} alt="blop" />
      </div>
      <div className="blop__container blop-sm">
        <img src={blopGreenSm} alt="blop" />
      </div>
    </div>
  );
}
