import React, { useState, useEffect } from "react";
import { Page } from "../Shared/Page.component";

import { Cart } from "./Cart.component";

export const CartPage = ({ service }) => {
  const [fee, setFee] = useState(null);

  useEffect(() => {
    if (!fee) {
      (async () => {
        const responseFee = await service.getDeliveryFee();

        setFee(responseFee);
      })();
    }
  });

  return (
    <Page>
      <div className="py-8 pb-16">
        <Cart deliveryFee={fee}></Cart>
      </div>
    </Page>
  );
};
