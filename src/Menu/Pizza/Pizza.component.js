import React, { useEffect, useState } from "react";

import { Button } from "../../Shared/Button.component";
import { Price } from "../../Shared/Price.component";
import {
  usePizzaCartProviderDispatch,
  usePizzaCartProviderState,
} from "../../Cart/Cart.context";
import { LoadingText } from "../../Shared/LoadingText.component.";

const PizzaImage = ({ src, className }) => {
  return (
    <div
      className={`pizza-card__image rounded-full flex-initial sm:w-32 sm:h-32 sm:mr-8`}
    >
      <img alt="Tasty Pizza From the Top" src={src} className={className} />
    </div>
  );
};

const Pizza = ({ pizza }) => {
  const dispatch = usePizzaCartProviderDispatch();
  const cartState = usePizzaCartProviderState();

  const countFromCart = cartState[pizza.id] ? cartState[pizza.id].count : 0;

  const [cartCount, setCartCount] = useState(countFromCart);

  useEffect(() => {
    const count = cartState[pizza.id] ? cartState[pizza.id].count : 0;
    setCartCount(count);
  }, [cartState, pizza.id]);

  if (!pizza) throw Error("Pizza needs pizza prop.");

  if (!pizza.name) {
    pizza = {
      name: <LoadingText size="sm"></LoadingText>,
      desc: <LoadingText size="lg"></LoadingText>,
    };
  }

  return (
    <div className="pizza-card flex py-6 items-center sm:flex-row text-center sm:text-left flex-col-reverse">
      <div className="hidden sm:flex">
        <PizzaImage src={pizza.image_url}></PizzaImage>
      </div>
      <div className="items-center flex flex-1">
        <div>
          <p className="pizza-card__title pt-4 sm:pt-0 sm:text-xl font-light capitalize text-2xl">
            {pizza.name}
          </p>
          <p className="text-2xl font-light">
            <Price {...pizza.price} />
          </p>
          <p className="text-sm font-light italic">{pizza.desc}</p>
        </div>
      </div>
      <div className="flex-1 flex items-center">
        <div className="flex-grow"></div>
        <div className={`${cartCount >= 1 ? "block" : "hidden"}`}>
          <Button
            onClick={dispatch.bind(null, {
              type: "removeOnePizza",
              payload: pizza,
            })}
            title={`Remove 1 ${pizza.name}`}
          >
            -
          </Button>
          <div className="whitespace-no-wrap p-2 px-4 rounded-md inline">
            {cartCount}
          </div>
        </div>
        <div className="">
          <div className="cursor-pointer">
            <Button
              green
              title={`Add 1 ${pizza.name}, price ${pizza.price.value}`}
              onClick={dispatch.bind(null, {
                type: "addToCart",
                payload: pizza,
              })}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Pizza, PizzaImage };
