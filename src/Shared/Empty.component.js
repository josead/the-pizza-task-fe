import React from "react";

export const Empty = ({ children }) => {
  return (
    <div className="inset-0 relative flex items-center justify-center">
      {children}
    </div>
  );
};
