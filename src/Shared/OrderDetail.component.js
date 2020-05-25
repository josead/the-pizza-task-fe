import React, { useEffect, useState } from "react";

import { Button } from "./Button.component";
import {
  usePizzaCartProviderState,
  usePizzaCartProviderDispatch,
} from "../Cart/Cart.context";
import { Price } from "./Price.component";
import { Link } from "react-router-dom";

const PizzaDetail = ({ name, count }) => {
  if (!count) return "";
  return (
    <span className="md:text-sm text-xs">
      {count >= 1 ? count : ""} <span className="pr-2">{name}</span>
    </span>
  );
};

export const OrderDetail = () => {
  const cartState = usePizzaCartProviderState();
  const dispatch = usePizzaCartProviderDispatch();
  const [cartSubtotalPrice, setCartSubtotalprice] = useState({ value: 0 });

  useEffect(() => {
    let subtotalPrice = 0;
    let currency;

    Object.keys(cartState).map((pizzaID) => {
      subtotalPrice +=
        cartState[pizzaID].count * cartState[pizzaID].price.value;
      currency = currency || cartState[pizzaID].price.currency;
      return null;
    });

    setCartSubtotalprice({ value: subtotalPrice, currency });
  }, [cartState]);

  return (
    <div className="h-16 w-full fixed bottom-0 md:top-0">
      <div
        className={`bg-white flex flex-col transform w-screen overflow-x-hidden
      ${
        cartSubtotalPrice.value > 0
          ? "translate-y-0 md:translate-y-16"
          : "translate-y-16 md:translate-y-0"
      } w-full min-h-full shadow-xs transition-all ease-in-out duration-150`}
      >
        <div className="m-auto w-full max-w-screen-xl flex items-center">
          <div className="flex-grow pl-4">
            <Button
              title="Remove All"
              onClick={() => {
                dispatch({
                  type: "resetCart",
                });
              }}
            >
              <span className="hidden sm:block">Remove All</span>
              <span className="block sm:hidden">R</span>
            </Button>
          </div>
          <div className="block w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/2 text-center text-gray-700">
            <div className="truncate mx-4">
              {Object.keys(cartState).map((p, i) => {
                return (
                  <span key={`${i}${cartState[p].id}`}>
                    {i >= 1 ? ", " : ""}
                    <PizzaDetail {...cartState[p]} />
                  </span>
                );
              })}
            </div>
          </div>
          <div className="flex-grow"></div>
          <div className="pr-4 text-xl text-gray-700 whitespace-no-wrap">
            Subtotal:{" "}
            <span className="text-gray-800">
              <Price {...cartSubtotalPrice} />
            </span>
          </div>
          <div className="pr-4">
            <Link to="/checkout">
              <Button primary>Place Order</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
