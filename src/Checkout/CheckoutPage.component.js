import React, { useState, useRef } from "react";

import { Page } from "../Shared/Page.component";
import { DeliveryForm } from "./DeliveryForm.component";
import { Button } from "../Shared/Button.component";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../helpers/useStorage.hook";

export const CheckoutPage = ({ service }) => {
  const [formReadOnly, setformReadOnly] = useState(false);
  const [previousAddresses, setPreviousAddresses] = useLocalStorage(
    "previousAddresses",
    []
  );
  const [selectedPreviousAddress, setSelectedPreviousAddress] = useState(null);
  const [showForm, setShowForm] = useState(!previousAddresses.length);

  const formRef = useRef(null);

  const handlePreviousAddress = (addr) => {
    setSelectedPreviousAddress({ ...addr });
    setformReadOnly(true);
  };

  const submitOrder = async (data) => {
    try {
      if (data.save) {
        setPreviousAddresses([...previousAddresses, data]);
      }

      const ticket = await service.sendOrder();

      console.log(ticket);
    } catch (e) {}
  };

  return (
    <Page>
      <div className="flex">
        <div className="flex-grow"></div>
        <div className="max-w-lg">
          <div className="py-4">
            <h2 className="font-bold text-lg">Finish Order</h2>
          </div>
          <div className="pb-4">
            {previousAddresses.map((addr) => (
              <Button
                key={addr.address + addr.location}
                className="w-full whitespace-pre-wrap mb-2"
                onClick={() => {
                  handlePreviousAddress(addr);
                }}
              >
                Send to "{addr.address}, {addr.location}"
              </Button>
            ))}
            <Button
              className={`w-full ${formReadOnly || showForm ? "hidden" : ""}`}
              onClick={() => {
                setShowForm(true);
                setTimeout(() => {
                  formRef.current.name.focus();
                }, 100);
              }}
            >
              New Address
            </Button>
          </div>
          <div className={`${showForm || formReadOnly ? "block" : "hidden"}`}>
            <p className="py-2 font-bold">Address Fields</p>
            <DeliveryForm
              fields={selectedPreviousAddress}
              readOnly={formReadOnly}
              formRef={formRef}
              onSubmit={submitOrder}
            >
              <Button
                className={`w-full ${formReadOnly || showForm ? "" : "hidden"}`}
                onClick={() => {
                  setShowForm(true);
                  setformReadOnly(false);
                  setTimeout(() => {
                    formRef.current.name.focus();
                  }, 100);
                }}
              >
                Edit Address
              </Button>
            </DeliveryForm>
          </div>
          <Link to="/">
            <Button className="w-full mt-4">Change Pizzas</Button>
          </Link>
        </div>
      </div>
    </Page>
  );
};
