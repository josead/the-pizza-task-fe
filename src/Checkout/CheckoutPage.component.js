import React, { useState, useRef } from "react";

import { Page } from "../Shared/Page.component";
import { DeliveryForm } from "./DeliveryForm.component";
import { Button } from "../Shared/Button.component";

export const CheckoutPage = ({ service }) => {
  const [newAddress, setNewAddress] = useState(false);

  const formRef = useRef(null);

  return (
    <Page>
      <div className="flex">
        <div className="flex-grow"></div>
        <div className="max-w-lg">
          <div className="py-4">
            <h2 className="font-bold text-lg">Finish Order</h2>
          </div>
          <div className="pb-4">
            <Button className="w-full whitespace-pre-wrap mb-2">
              Send to "Head sdasdasdasd Street 444"
            </Button>
            <Button
              className="w-full"
              onClick={() => {
                setNewAddress(true);
                setTimeout(() => {
                  formRef.current.name.focus();
                }, 100);
              }}
            >
              New Address
            </Button>
          </div>
          <div className={`${newAddress ? "block" : "hidden"}`}>
            <p className="py-2 font-bold">Complete Fields</p>
            <DeliveryForm formRef={formRef} onSubmit={(data) => {}} />
          </div>
        </div>
      </div>
    </Page>
  );
};
