import React from "react";
import { Page } from "../Shared/Page.component";

import { Cart } from "./Cart.component";

export const CartPage = () => {
  return (
    <Page>
      <div className="py-8">
        <Cart></Cart>
      </div>
    </Page>
  );
};
