import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button.component";

test("Button should render inner text.", () => {
  const { getByText } = render(<Button>Button Test</Button>);
  const cartElement = getByText(/Button Test/i);
  expect(cartElement).toBeInTheDocument();
});
