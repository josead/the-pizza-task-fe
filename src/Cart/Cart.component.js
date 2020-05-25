import React, { useEffect, useState } from "react";
import { Empty } from "../Shared/Empty.component";
import {
  usePizzaCartProviderState,
  usePizzaCartProviderDispatch,
} from "./Cart.context";
import { Price } from "../Shared/Price.component";

const CartItem = ({ price, count, id, name, desc }) => {
  return (
    <div>
      <Price {...price} /> {count}, {id}, {name}, {desc}
    </div>
  );
};

export const Cart = ({ service }) => {
  const cartState = usePizzaCartProviderState();
  const dispatch = usePizzaCartProviderDispatch();

  const [itemsCount, setItemsCount] = useState(0);

  useEffect(() => {
    let count = 0;
    Object.keys(cartState).map((pizzaID) => {
      count += cartState[pizzaID].count;
      return null;
    });
    setItemsCount(count);
  }, [cartState]);

  if (!Object.keys(cartState).length) return <Empty>Nothing in Cart yet</Empty>;

  return (
    <div className="">
      <div className="flex flex-grow">
        <div className="">
          <h2>Cart ()</h2>
        </div>
      </div>
      {Object.keys(cartState).map((id, i) => {
        return <CartItem {...cartState[id]} key={id + i} dispatch={dispatch} />;
      })}
      <div>Pizzas to deliver: {itemsCount}</div>
    </div>
  );
};
