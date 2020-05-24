import React from "react";

import { Button } from "../../Shared/Button.component";
import { Price } from "../../Shared/Price.component";
import { usePizzaCartProviderDispatch } from "../../Cart.context";

export const Pizza = ({ pizza }) => {
  const dispatch = usePizzaCartProviderDispatch();

  if (!pizza) throw Error("Pizza needs pizza prop.");
  return (
    <div className="pizza-card flex py-6">
      <div className="rounded-full flex-initial bg-orange-300 w-32 h-32 mx-6 "></div>
      <div className="items-center flex flex-1">
        <div>
          <p className="text-xl font-light italic">{pizza.name}</p>
          <p className="text-2xl font-light">
            <Price {...pizza.price} />
          </p>
          <p className="text-sm font-light italic">{pizza.desc}</p>
        </div>
      </div>
      <div className="flex-1 flex items-center">
        <div className="flex-grow"></div>
        <div className="flex">
          <div className="cursor-pointer">
            <Button
              green
              onClick={() => {
                dispatch({
                  type: "addToCart",
                  payload: pizza,
                });
              }}
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
