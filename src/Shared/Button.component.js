import React from "react";

export const Button = ({ children, green, primary, noColor, noBorder }) => {
  if (green) {
    return (
      <button
        className="
        p-2
        px-4
        rounded-md
        bg-green-700
        text-white
        hover:bg-green-500
        hover:border-green-300
        transition-colors duration-100 ease-out"
      >
        {children}
      </button>
    );
  }

  if (primary) {
    return (
      <button
        className="
        p-2
        px-4
        rounded-md
        bg-red-700
        text-white
        hover:bg-red-500
        hover:border-red-300
        transition-colors duration-100 ease-out"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`p-2 px-4 rounded-md ${
        noBorder ? "" : "border border-gray-500"
      } ${noColor ? "" : "bg-gray-200"}
        active:bg-gray-600
        hover:bg-gray-100 hover:border-gray-300 hover:text-gray-700 transition-colors duration-100 ease-out
      `}
    >
      {children}
    </button>
  );
};
