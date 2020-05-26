import React from "react";
import { useCurrencyProviderState } from "../Currency/Currency.context";

const currencies = {
  EUR: "€",
  USD: "$",
};

// Price change will only be for visibility
// The user would still pay in Euros (with the conversion applied by their bank, etc..)

export const Price = ({ value, currency }) => {
  const currencyState = useCurrencyProviderState();

  if (!currency || !value) return <span>€ ?</span>;

  // if (currencyState.loading) return <span>loading</span>;

  if (!currencyState.rates) {
    return (
      <span aria-label="money">
        {currencies[currency]} {value.toFixed(2)}
      </span>
    );
  } else {
    value = currencyState.rates[currencyState.current] * value;

    return (
      <span aria-label="money">
        {currencies[currencyState.current]} {value.toFixed(2)}
      </span>
    );
  }
};
