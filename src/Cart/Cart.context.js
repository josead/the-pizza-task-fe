import React, { createContext, useReducer, useContext } from "react";

const PizzaCartProviderStateContext = createContext();
const PizzaCartProviderDispatchContext = createContext();

const initial = {};
const PizzaCartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer((_state, action) => {
    const state = { ..._state };
    let pizzaID;
    switch (action.type) {
      case "resetCart":
        return {};
      case "addToCart":
        pizzaID = action.payload && action.payload.id;
        state[pizzaID] = state[pizzaID]
          ? {
              ...state[pizzaID],
              count: state[pizzaID].count + 1,
            }
          : {
              ...action.payload,
              count: 1,
            };
        return state;
      case "removeOnePizza":
        pizzaID = action.payload && action.payload.id;
        if (!state[pizzaID]) return state;
        // If remove last pizza, remove it from cart
        if (state[pizzaID] && state[pizzaID].count - 1 === 0) {
          delete state[pizzaID];
          return state;
        }
        state[pizzaID] = state[pizzaID]
          ? {
              ...state[pizzaID],
              count: state[pizzaID].count - 1,
            }
          : {
              count: 1,
              ...action.payload,
            };
        return state;
      case "removeAllPizzas":
        pizzaID = action.payload && action.payload.id;
        if (state[pizzaID]) {
          delete state[pizzaID];
        }
        return state;
      default:
        throw new Error();
    }
  }, initial);

  return (
    <PizzaCartProviderDispatchContext.Provider value={dispatch}>
      <PizzaCartProviderStateContext.Provider value={cart}>
        {children}
      </PizzaCartProviderStateContext.Provider>
    </PizzaCartProviderDispatchContext.Provider>
  );
};

function usePizzaCartProviderState() {
  const context = useContext(PizzaCartProviderStateContext);
  if (context === undefined) {
    throw new Error(
      "usePizzaCartProviderState must be used within PizzaCartProvider"
    );
  }
  return context;
}

function usePizzaCartProviderDispatch() {
  const context = useContext(PizzaCartProviderDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useCookiesProviderDispatch must be used within PizzaCartProvider"
    );
  }
  return context;
}

export {
  PizzaCartProvider,
  usePizzaCartProviderState,
  usePizzaCartProviderDispatch,
};
