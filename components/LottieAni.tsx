'use client'
import React from "react";
import Lottie from "react-lottie";

const LottieAnimation = ({ animationData,height,width }: { animationData: any,height?:number,width?:number }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={height ? height : 400} width={width ? width : 400} />;
};

export default LottieAnimation;
