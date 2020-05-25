import React from "react";

export const Page = ({ children }) => {
  return (
    <div className="pt-16 md:pt-24 max-w-screen-xl m-auto">
      <div className="p-4">{children}</div>
    </div>
  );
};
