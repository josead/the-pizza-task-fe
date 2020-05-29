import React, { useEffect, useState } from "react";
import { Empty } from "../Shared/Empty.component";
import { Price } from "../Shared/Price.component";
import { Button } from "../Shared/Button.component";
import {
  usePizzaCartProviderState,
  usePizzaCartProviderDispatch,
} from "./Cart.context";
import { Link } from "react-router-dom";
import { OrderSummary } from "./OrderSummary.component";

const CartItem = ({ price, count, id, name, desc, dispatch }) => {
  return (
    <div className="py-2 border-solid border-b-2 border-gray-500">
      <div className="flex ">
        <div className="flex-1 font-bold">
          {name} ({count})
        </div>
        <div className="hidden md:block flex-1 px-2 font-thin italic">
          {desc}
        </div>
        <div className="flex-grow"></div>
        <div className="font-bold">
          <Price value={price.value * count} currency={price.currency} />
        </div>
      </div>
      <div className="flex">
        <Button
          noBorder
          noColor
          onClick={() => {
            dispatch({
              type: "removeAllPizzas",
              payload: {
                id,
              },
            });
          }}
        >
          remove all
        </Button>{" "}
        <Button
          noBorder
          noColor
          onClick={() => {
            dispatch({
              type: "removeOnePizza",
              payload: {
                id,
              },
            });
          }}
        >
          remove one
        </Button>
      </div>
    </div>
  );
};

export const Cart = ({ deliveryFee }) => {
  const cartState = usePizzaCartProviderState();
  const dispatch = usePizzaCartProviderDispatch();

  const [itemsCount, setItemsCount] = useState(0);
  const [subtotalPrice, setSubtotalPrice] = useState(0);

  useEffect(() => {
    let count = 0;
    let subtotalPrice = 0;
    let currency;
    Object.keys(cartState).map((pizzaID) => {
      count += cartState[pizzaID].count;
      subtotalPrice +=
        cartState[pizzaID].count * cartState[pizzaID].price.value;
      currency = currency || cartState[pizzaID].price.currency;
      return null;
    });
    setItemsCount(count);
    setSubtotalPrice({ value: subtotalPrice, currency });
  }, [cartState]);

  if (!Object.keys(cartState).length)
    return (
      <Empty>
        <div className="text-center">
          <p className="p-4">Nothing in Cart.</p>
          <div>
            <Link to="/">
              <Button>Go Back to Menu</Button>
            </Link>
          </div>
        </div>
      </Empty>
    );

  return (
    <div className="">
      <div className="flex flex-grow">
        <div className="">
          <h2 className="font-bold text-lg">CART ({itemsCount})</h2>
        </div>
      </div>
      <section className="lg:flex">
        <div>
          <div className="flex pt-4 lg:pb-2 border-solid border-b-2 border-gray-500">
            <div className="flex-1">ITEM</div>
            <div className="hidden md:block flex-1 px-2">DESC</div>
            <div className="flex-grow"></div>
            <div className="">PRICE</div>
          </div>
          {Object.keys(cartState).map((id, i) => {
            return (
              <CartItem {...cartState[id]} key={id + i} dispatch={dispatch} />
            );
          })}
        </div>
        <div className="lg:pl-4 flex-auto w-full lg:w-64">
          <OrderSummary
            itemsCount={itemsCount}
            subtotalPrice={subtotalPrice}
            deliveryFee={deliveryFee}
          />
          <div className="">
            <Link to="/checkout">
              <Button primary className="w-full mt-2">
                Place Order
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
