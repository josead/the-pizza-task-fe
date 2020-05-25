import React from "react";

import { Button } from "../../Shared/Button.component";
import { Price } from "../../Shared/Price.component";
import { usePizzaCartProviderDispatch } from "../../Cart/Cart.context";

export const Pizza = ({ pizza, countCart }) => {
  const dispatch = usePizzaCartProviderDispatch();

  if (!pizza) throw Error("Pizza needs pizza prop.");
  return (
    <div className="pizza-card flex py-6">
      <div className="rounded-full flex-initial bg-orange-300 w-32 h-32 mr-8 "></div>
      <div className="items-center flex flex-1">
        <div>
          <p className="text-xl font-light">{pizza.name}</p>
          <p className="text-2xl font-light">
            <Price {...pizza.price} />
          </p>
          <p className="text-sm font-light italic">{pizza.desc}</p>
        </div>
      </div>
      <div className="flex-1 flex items-center">
        <div className="flex-grow"></div>
        <div className={`${countCart >= 1 ? "block" : "hidden"}`}>
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
            {countCart}
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
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
