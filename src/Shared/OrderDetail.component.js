import React, { useEffect, useState } from "react";
import { Button } from "./Button.component";
import { usePizzaCartProviderState } from "../Cart.context";
import { Price } from "./Price.component";

const PizzaDetail = ({ name, count }) => {
  if (!count) return "";
  return (
    <span className="md:text-sm text-xs">
      {count >= 1 ? count : ""}x <span className="pr-2">{name}</span>
    </span>
  );
};

export const OrderDetail = () => {
  const cartState = usePizzaCartProviderState();

  const [cartPizzasCount, setCartPizzasCount] = useState(0);
  const [cartTotalPrice, setCartTotalprice] = useState(0);

  useEffect(() => {
    let count = 0;
    let totalPrice = 0;
    let currency;

    console.log(cartState);
    Object.keys(cartState).map((pizzaID) => {
      console.log("pizzaID");
      count += cartState[pizzaID].count;
      totalPrice += cartState[pizzaID].count * cartState[pizzaID].price;
      currency = currency || cartState[pizzaID].price.currency;
    });

    setCartPizzasCount(count);
    setCartTotalprice({ value: totalPrice, currency });
  }, [cartState]);

  return (
    <div
      className={`bg-white fixed flex transform bottom-0
      ${
        cartPizzasCount
          ? "translate-y-0 md:translate-y-16"
          : "translate-y-16 md:translate-y-0"
      } md:top-0 w-full h-16 shadow-xs`}
    >
      <div className="m-auto w-full max-w-screen-xl flex items-center ">
        <div className="hidden md:block px-4 text-gray-700">
          <Button>Edit Order</Button>
        </div>
        <div className="md:hidden px-4 text-gray-700">
          <Button>Edit</Button>
        </div>
        <span className="mx-2">{cartPizzasCount} Pizzas:</span>
        <div className="hidden sm:block sm:w-1/3 md:w-1/3 lg:w-1/2 md:flex text-gray-700">
          <div className="truncate">
            {Object.keys(cartState).map((p) => {
              return <PizzaDetail {...cartState[p]} key={p.id} />;
            })}
          </div>
        </div>
        <div className="flex-grow"></div>
        <div className="pr-4 text-xl text-gray-700">
          Total:{" "}
          <span className="text-gray-800">
            <Price {...cartTotalPrice} />
          </span>
        </div>
        <div className="pr-4">
          <a href="#checkout">
            <Button primary>Place Order</Button>
          </a>
        </div>
      </div>
    </div>
  );
};
