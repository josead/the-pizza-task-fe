import React from "react";
import { Pizza } from "./Pizza/Pizza.component";

export const Menu = ({ pizzas }) => {
  return (
    <div className="pb-16">
      {pizzas.map((p) => (
        <Pizza pizza={p} key={p.id} />
      ))}
    </div>
  );
};
