import React, { useEffect, useState } from "react";

import logo from "../assets/logo.png";
import cart from "../assets/cart.svg";
import { Button } from "./Button.component";

import { usePizzaCartProviderState } from "../Cart/Cart.context";
import { Link } from "react-router-dom";

export const Nav = () => {
  const cartState = usePizzaCartProviderState();

  const [itemsInCart, setItemsInCart] = useState(0);

  useEffect(() => {
    let count = 0;
    Object.keys(cartState).map((pizzaID) => {
      count += cartState[pizzaID].count;
      return null;
    });
    setItemsInCart(count);
  }, [cartState]);

  return (
    <div className="z-10 bg-white w-full h-16 shadow-xs fixed w-screen overflow-x-hidden">
      <div className="flex text-gray-700 w-full h-full max-w-screen-xl m-auto">
        <Link to="/" className="h-full flex flex-2 items-center sm:pr-4">
          <div className="h-full">
            <img id="logo" src={logo} alt="Pizza Task" className="p-4 h-full" />
          </div>
          <h1 className="text-md sm:text-xl py-4">Pizza Task</h1>
        </Link>
        <div className="flex-grow"></div>
        <div className="flex items-center">
          <Link to="/orders">
            <Button noBorder noColor className="bg-white">
              Quick Order
            </Button>
          </Link>
          <div className="mx-2 sm:mx-4">
            <Link
              to="/cart"
              title={
                itemsInCart
                  ? `Cart with ${itemsInCart} Pizzas`
                  : "Your Cart is empty"
              }
            >
              <Button noColor noBorder>
                <span
                  className={`${
                    !itemsInCart ? "hidden" : ""
                  } leading-3 absolute p-1 bg-red-700 text-white text-sm rounded-md h-5`}
                >
                  {itemsInCart}
                </span>
                <img src={cart} alt="Cart Icon" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
