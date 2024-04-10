import React from "react";

const ShimmerUi = () => {
  return (
    <div className="flex flex-wrap pt-28">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-52 h-40 p-5 m-5 shadow bg-gray-100"
          ></div>
        ))}
    </div>
  );
};

export default ShimmerUi;
