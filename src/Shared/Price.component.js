import React from "react";

const currencies = {
  EUR: "€",
  USD: "$",
};

export const Price = ({ value, currency }) => {
  return (
    <span>
      {currencies[currency]}
      {value}
    </span>
  );
};
