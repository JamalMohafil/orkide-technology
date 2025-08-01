import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center z-[20] absolute overflow-hidden w-[100vw] top-0 left-0 bg-white justify-center min-h-screen">
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
