import React from "react";
import { Pizza } from "./Pizza/Pizza.component";
import { usePizzaCartProviderState } from "../Cart/Cart.context";

export const Menu = ({ pizzas }) => {
  const cartState = usePizzaCartProviderState();

  return (
    <div className="pb-16">
      {pizzas.map((p) => (
        <Pizza
          pizza={p}
          key={p.id}
          countCart={cartState[p.id] && cartState[p.id].count}
        />
      ))}
    </div>
  );
};
