import React, { createContext, useReducer, useContext, useEffect } from "react";

const CurrencyProviderStateContext = createContext();
const CurrencyProviderDispatchContext = createContext();

const initial = {
  from: "EUR",
  current: "EUR",
  rates: null,
  available: ["EUR", "USD"],
  loading: false,
};

const CurrencyProvider = ({ children, service }) => {
  const [currency, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "changeCurrentCurrency":
        if (state.from === action.payload)
          return { ...state, current: action.payload };
        return { ...state, current: action.payload, loading: !state.rates };
      case "changeRates":
        return { ...state, rates: action.payload, loading: false };
      default:
        throw new Error();
    }
  }, initial);

  useEffect(() => {
    if (currency.from !== currency.current && !currency.rates) {
      (async () => {
        const rates = await service.getCurrencyRates(
          currency.from,
          currency.current
        );

        console.log(rates);
        // Added EUR: 1 to support current change back in Price
        dispatch({ type: "changeRates", payload: { ...rates, EUR: 1 } });
      })();
    }
  }, [currency, service, currency.loading]);

  return (
    <CurrencyProviderDispatchContext.Provider value={dispatch}>
      <CurrencyProviderStateContext.Provider value={currency}>
        {children}
      </CurrencyProviderStateContext.Provider>
    </CurrencyProviderDispatchContext.Provider>
  );
};

function useCurrencyProviderState() {
  const context = useContext(CurrencyProviderStateContext);
  if (context === undefined) {
    throw new Error(
      "useCurrencyProviderState must be used within CurrencyProvider"
    );
  }
  return context;
}

function useCurrencyProviderDispatch() {
  const context = useContext(CurrencyProviderDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useCookiesProviderDispatch must be used within CurrencyProvider"
    );
  }
  return context;
}

export {
  CurrencyProvider,
  useCurrencyProviderState,
  useCurrencyProviderDispatch,
};
