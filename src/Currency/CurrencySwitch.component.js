import React from "react";
import { Button } from "../Shared/Button.component";

import {
  useCurrencyProviderState,
  useCurrencyProviderDispatch,
} from "./Currency.context";

export const CurrencySwitch = () => {
  const { current, available, loading } = useCurrencyProviderState();
  const dispatch = useCurrencyProviderDispatch();

  return (
    <div>
      {available && !loading
        ? available.map((x, i) => (
            <Button
              key={i}
              noBorder={current === x}
              noColor={current === x}
              onClick={() => {
                if (x === current) return;
                dispatch({ type: "changeCurrentCurrency", payload: x });
              }}
            >
              {x}
            </Button>
          ))
        : ""}
      {loading ? "loading" : ""}
    </div>
  );
};
