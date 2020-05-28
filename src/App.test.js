import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Renders App and menu is fetching.", () => {
  const { getByText } = render(<App />);
  const FetchingMenu = getByText(/fetching menu.../i);
  expect(FetchingMenu).toBeInTheDocument();
});
