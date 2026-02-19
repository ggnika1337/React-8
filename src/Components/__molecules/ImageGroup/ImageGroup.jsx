import React from "react";
import "./ImageGroup.css";
import MonitorImg from "../../../assets/images/womanScreen.png";
import BoxImg from "../../../assets/images/box.png";
import Shadow from "../../../assets/images/imageShadow.png";
import UpperShadow from "../../../assets/images/UpperShadow.png";
import secondUpperShadow from "../../../assets/images/secondUpperShadow.png";

function ImageGroup() {
  return (
    <>
      <div className="image-container">
        <img className="upper-shadow" src={UpperShadow} alt="" />
        <img className="second-upper-shadow" src={secondUpperShadow} alt="" />
        <img className="box-image" src={BoxImg} alt="" />
        <img className="big-image" src={MonitorImg} alt="" />
        <img className="shadow" src={Shadow} alt="" />
      </div>
    </>
  );
}

export default ImageGroup;
