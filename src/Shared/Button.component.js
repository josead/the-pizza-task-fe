import React from "react";

export const Button = ({ children, noColor, noBorder }) => {
  return (
    <div
      className={`p-2 px-4 rounded-md ${
        noBorder ? "" : "border border-yellow-500"
      } ${noColor ? "" : "bg-yellow-200"}
        hover:bg-gray-100 
      `}
    >
      {children}
    </div>
  );
};
