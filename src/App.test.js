import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Renders App and cart is in place.", () => {
  const { getByTitle } = render(<App />);
  const cartElement = getByTitle(/cart/i);
  expect(cartElement).toBeInTheDocument();
});
