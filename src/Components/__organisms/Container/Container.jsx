import React from "react";
import "./Container.css";
import ImageGroup from "../../__molecules/ImageGroup/ImageGroup";
import FAQ from "../../__molecules/FAQ/FAQ";

function Container() {
  return (
    <>
      <div className="box">
        <ImageGroup />
        <FAQ />
      </div>
    </>
  );
}

export default Container;
