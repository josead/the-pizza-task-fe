import React from "react";

const commonClasses = "whitespace-no-wrap p-2 px-4 rounded-md ";

export const Button = ({
  children,
  green,
  primary,
  noColor,
  noBorder,
  ...rest
}) => {
  if (green) {
    return (
      <button
        {...rest}
        className={`${commonClasses} ${rest.className}
        bg-green-700
        text-white
        hover:bg-green-500
        hover:border-green-300
        transition-colors duration-100 ease-out`}
      >
        {children}
      </button>
    );
  }

  if (primary) {
    return (
      <button
        {...rest}
        className={`${commonClasses} ${rest.className}
        bg-red-700
        text-white
        hover:bg-red-500
        hover:border-red-300
        transition-colors duration-100 ease-out`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      {...rest}
      className={`${commonClasses} ${rest.className} ${
        noBorder ? "" : "border border-gray-500"
      } ${noColor ? "" : "bg-gray-200"}
        active:bg-gray-600
        hover:bg-gray-100 hover:border-gray-300 hover:text-gray-700 text-gray-900 transition-colors duration-100 ease-out
      `}
    >
      {children}
    </button>
  );
};
