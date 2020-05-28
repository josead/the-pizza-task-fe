import React from "react";
import { render } from "@testing-library/react";

import { menuService as mockService } from "./Menu.service.mock";
import { Menu } from "./Menu.component";
import { PizzaCartProvider } from "../Cart/Cart.context";
import { CurrencyProvider } from "../Currency/Currency.context";

test("MenuComponent should show error when pizzas null", () => {
  const { getByText } = render(<Menu pizzas={null} />);
  const noPizzas = getByText(/Something wrong happend/i);
  expect(noPizzas).toBeInTheDocument();
});

test("MenuComponent should show error when pizzas undefined", () => {
  const { getByText } = render(<Menu pizzas={undefined} />);
  const noPizzas = getByText(/Something wrong happend/i);
  expect(noPizzas).toBeInTheDocument();
});

test("MenuComponent should show no-items message when pizzas empty array", () => {
  const { getByText } = render(<Menu pizzas={[]} />);
  const noPizzas = getByText(/There are no items in this menu/i);
  expect(noPizzas).toBeInTheDocument();
});

test("MenuComponent expect to render all pizzas in menu", async () => {
  const pizzasMenu = await mockService.getMenu();
  const { getByText } = render(
    <PizzaCartProvider>
      <CurrencyProvider>
        <Menu pizzas={pizzasMenu} />
      </CurrencyProvider>
    </PizzaCartProvider>
  );

  pizzasMenu.map((p) => {
    const pizzaMarinara = getByText(p.name);
    expect(pizzaMarinara).toBeInTheDocument();
  });
});
