import React from "react";
import { Empty } from "../Shared/Empty.component";
import { Pizza } from "./Pizza/Pizza.component";

export const Menu = ({ pizzas }) => {
  if (!pizzas) return <Empty>Something wrong happend! Try again.</Empty>;

  if (!pizzas.length) return <Empty>There are no items in this menu.</Empty>;

  return (
    <section className="pb-16">
      {pizzas.map((p) => (
        <Pizza pizza={p} key={p.id} />
      ))}
    </section>
  );
};
