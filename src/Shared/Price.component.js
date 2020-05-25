import React from "react";

const currencies = {
  EUR: "€",
  USD: "$",
};

export const Price = ({ value, currency }) => {
  if (!currency || !value) return <span>€ ?</span>;
  return (
    <span>
      {currencies[currency]} {value}
    </span>
  );
};
