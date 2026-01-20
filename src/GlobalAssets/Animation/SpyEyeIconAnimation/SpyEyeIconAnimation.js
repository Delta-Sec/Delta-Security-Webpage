import React from "react";
import Lottie from "lottie-react";
import animationData from "./SpyEyeIconAnimation.json";

const SpyEyeIconAnimation = ({ widthSize }) => {
  return (
    <div
      style={{
        width: `${widthSize}`,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
};

export default SpyEyeIconAnimation;
