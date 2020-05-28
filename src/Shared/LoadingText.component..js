import React from "react";

export const LoadingText = ({ size }) => {
  return (
    <>
      {{
        2: "PI",
        sm: "ZZAPIPIZZA",
        lg: "ZZAPI PIZZA ZAPIZZAPIZZA PIZZA PIZZAPIZAPI PIZZA",
      }[size]
        .split(" ")
        .map((x, i) => (
          <span key={i} className="bg-gray-200 text-gray-200 select-none mr-2">
            x
          </span>
        ))}
    </>
  );
};
