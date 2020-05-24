import React, { createContext, useReducer, useContext } from "react";

const PizzaCartProviderStateContext = createContext();
const PizzaCartProviderDispatchContext = createContext();

const PizzaCartProvider = ({ children }) => {
  const initial = {};
  const [cart, dispatch] = useReducer((_state, action) => {
    let pizzaID;
    switch (action.type) {
      case "resetCart":
        return {};
      case "addToCart":
        pizzaID = action.payload && action.payload.id;
        _state[pizzaID] = _state[pizzaID]
          ? {
              ..._state[pizzaID],
              count: _state[pizzaID].count + 1,
            }
          : {
              ...action.payload,
              count: 1,
            };
        console.log("####", _state);
        return { ..._state };
      case "removeOnePizza":
        pizzaID = action.payload && action.payload.id;
        // If remove last pizza, remove it from cart
        if (_state[pizzaID] && _state[pizzaID].count - 1 === 0) {
          delete _state[pizzaID];
          _state[pizzaID] = null;
          return { ..._state };
        }
        _state[pizzaID] = _state[pizzaID]
          ? {
              ..._state[pizzaID],
              count: _state[pizzaID].count - 1,
            }
          : {
              count: 1,
              ...action.payload,
            };
        return { ..._state };
      case "removeAllPizzas":
        pizzaID = action.payload && action.payload.id;
        if (_state[pizzaID] && _state[pizzaID].count - 1 === 0) {
          delete _state[pizzaID];
          _state[pizzaID] = null;
          return { ..._state };
        }
        return _state;
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
