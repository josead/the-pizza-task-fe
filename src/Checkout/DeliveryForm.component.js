import React, { useState } from "react";
import { Button } from "../Shared/Button.component";

export const DeliveryForm = ({ formRef, onSubmit }) => {
  const [data, setData] = useState({
    name: "",
    address: "",
    location: "",
    phone: "",
  });

  // const [validation, setValidation] = useState({
  //   name: null,
  //   address: null,
  //   location: null,
  //   phone: null,
  // });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendOrder = (event) => {
    event.preventDefault();
    console.log(data);
    onSubmit(data);
  };

  return (
    <form ref={formRef} onSubmit={sendOrder}>
      <div>
        <label className="block text-gray-800" htmlFor="name">
          Name *
        </label>
        <input
          className="form-input"
          aria-required="true"
          required
          id="name"
          type="text"
          placeholder="Jhon Doh"
          onChange={handleInputChange}
          name="name"
        ></input>
      </div>
      <div>
        <label className="block text-gray-800" htmlFor="address">
          Address *
        </label>
        <input
          className="form-input"
          aria-required="true"
          required
          id="address"
          aria-invalid="true"
          type="text"
          placeholder="Main Street 1234"
          onChange={handleInputChange}
          name="address"
        ></input>
      </div>
      <div>
        <label className="block text-gray-800" htmlFor="location">
          Location *
        </label>
        <input
          className="form-input"
          aria-required="true"
          required
          id="location"
          aria-invalid="true"
          type="text"
          placeholder="1B, the black door, etc.. "
          onChange={handleInputChange}
          name="location"
        ></input>
      </div>
      <div>
        <label className="block text-gray-800" htmlFor="phone">
          Phone *
        </label>
        <input
          className="form-input"
          aria-required="true"
          required
          id="phone"
          aria-invalid="true"
          type="text"
          pattern="^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$"
          placeholder="00 0000 0000"
          onChange={handleInputChange}
          name="phone"
        ></input>
      </div>
      <Button className="w-full mt-4" primary type="submit">
        Finish Order
      </Button>
    </form>
  );
};
