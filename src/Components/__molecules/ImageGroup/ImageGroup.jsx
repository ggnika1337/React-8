import React from "react";
import "./ImageGroup.css";
import MonitorImg from "../../../assets/images/womanScreen.png";
import BoxImg from "../../../assets/images/box.png";
import Shadow from "../../../assets/images/imageShadow.png";
import UpperShadow from "../../../assets/images/UpperShadow.png";
import SecondUpperShadow from "../../../assets/images/secondUpperShadow.png";
import MobileShadow from "../../../assets/images/MobileShadow.png";
import MobileMonitorImg from "../../../assets/images/MobileWomanScreen.png";

function ImageGroup() {
  return (
    <>
      <div className="image-container">
        <img className="upper-shadow" src={UpperShadow} alt="" />
        <img className="second-upper-shadow" src={SecondUpperShadow} alt="" />
        <img className="box-image" src={BoxImg} alt="" />
        <img className="big-image" src={MonitorImg} alt="" />
        <img className="mobile-big-image" src={MobileMonitorImg} alt="" />
        <img className="shadow" src={Shadow} alt="" />
        <img className="mobile-shadow" src={MobileShadow} alt="" />
      </div>
    </>
  );
}

export default ImageGroup;
