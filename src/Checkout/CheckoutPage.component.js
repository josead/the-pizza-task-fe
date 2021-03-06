import React, { useState, useRef } from "react";
import { Link, Prompt, useHistory } from "react-router-dom";

import { Page } from "../Shared/Page.component";
import { DeliveryForm } from "./DeliveryForm.component";
import { Button } from "../Shared/Button.component";
import { useLocalStorage } from "../helpers/useStorage.hook";
import {
  usePizzaCartProviderState,
  usePizzaCartProviderDispatch,
} from "../Cart/Cart.context";

export const CheckoutPage = ({ service }) => {
  const history = useHistory();
  const cartState = usePizzaCartProviderState();
  const [loading, setLoading] = useState(false);
  const cartDispatch = usePizzaCartProviderDispatch();
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

  const getSavedAddressIndex = (data) => {
    const previous = previousAddresses.findIndex(
      (x) =>
        x.address.toLowerCase() === data.address.toLowerCase() &&
        x.location.toLowerCase() === data.location.toLowerCase()
    );
    return previous >= 0 ? previous : false;
  };

  const submitOrder = async (data) => {
    try {
      const existingIndex = getSavedAddressIndex(data);

      setLoading(true);

      if (data.save && existingIndex === false) {
        setPreviousAddresses([...previousAddresses, data]);
      } else if (data.save && existingIndex !== false) {
        previousAddresses[existingIndex] = data;
        setPreviousAddresses([...previousAddresses]);
      }

      const ticket = await service.sendOrder({
        addressData: data,
        cartData: cartState,
      });

      // TODO: Save ticket
      setLoading(false);
      setShowForm(false);
      setSelectedPreviousAddress(null);
      setformReadOnly(false);

      cartDispatch({
        type: "resetCart",
      });

      history.push(`/order-success?ticket=${ticket}`, { ticket });
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
                disabled={loading}
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
              disabled={loading}
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
          <Prompt
            when={showForm || formReadOnly}
            message={"If you continue the progress in checkout will be lost."}
          />
          <div className={`${showForm || formReadOnly ? "block" : "hidden"}`}>
            <p className="py-2 font-bold">Address Fields</p>
            <DeliveryForm
              fields={selectedPreviousAddress}
              readOnly={formReadOnly}
              formRef={formRef}
              disabled={loading}
              onSubmit={submitOrder}
            >
              <Button
                disabled={loading}
                className={`w-full ${formReadOnly || showForm ? "" : "hidden"}`}
                onClick={(event) => {
                  event.preventDefault();
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
            <Button disabled={loading} className="w-full mt-4">
              Change Pizzas
            </Button>
          </Link>
        </div>
      </div>
    </Page>
  );
};
