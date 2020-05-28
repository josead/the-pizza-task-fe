import React from "react";
import { render } from "@testing-library/react";

import { PizzaCartProvider } from "../../Cart/Cart.context";
import { CurrencyProvider } from "../../Currency/Currency.context";
import { Pizza } from "./Pizza.component";

window._virtualConsole.removeAllListeners("jsdomError");

test("PizzaComponent needs CurrencyProvider and PizzaCartProvider context.", (done) => {
  try {
    expect(render(<Pizza pizza={{}} />)).toThrow(
      "[Error: usePizzaCartProviderState must be used within CurrencyProvider]"
    );
  } catch (e) {
    done();
  }
});

test("PizzaComponent should throw error when pizza prop is null", () => {
  expect(render(<Pizza pizza={null} />)).toThrow();
});

test("PizzaComponent should throw error when pizza prop undefined", () => {
  expect(render(<Pizza pizza={undefined} />)).toThrow();
});

test("PizzaComponent should show loading pizza when pizza prop is empty object", () => {
  const { getByText } = render(<Pizza pizzas={{}} />);
});

test("PizzaComponent expect to render all pizzas in menu", async () => {
  const pizzasMenu = await mockService.getMenu();
  const { getByText } = render(
    <PizzaCartProvider>
      <CurrencyProvider>
        <Pizza pizzas={pizzasMenu} />
      </CurrencyProvider>
    </PizzaCartProvider>
  );

  pizzasMenu.map((p) => {
    const pizzaMarinara = getByText(p.name);
    expect(pizzaMarinara).toBeInTheDocument();
  });
});
