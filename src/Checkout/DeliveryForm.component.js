import React, { useState, useEffect } from "react";
import { Button } from "../Shared/Button.component";

let formData = {
  name: "",
  address: "",
  location: "",
  phone: "",
  save: false,
};

export const DeliveryForm = ({
  fields,
  readOnly,
  formRef,
  onSubmit,
  children,
}) => {
  const [data, setData] = useState(formData);

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

  const handleCheckboxToggle = () => {
    setData({
      ...data,
      save: !data.save,
    });
  };

  const sendOrder = (event) => {
    event.preventDefault();
    onSubmit(data);
  };

  useEffect(() => {
    if (fields) {
      setData(fields);
      formRef.current.name.value = fields.name;
      formRef.current.address.value = fields.address;
      formRef.current.location.value = fields.location;
      formRef.current.phone.value = fields.phone;
    }
  }, [fields, formRef]);

  useEffect(() => {
    return () => {
      formData = data;
    };
  });

  return (
    <form ref={formRef} onSubmit={sendOrder}>
      <div>
        <label className="block text-gray-800" htmlFor="name">
          Your Name *
        </label>
        <input
          className="form-input"
          aria-required="true"
          readOnly={readOnly}
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
          readOnly={readOnly}
          required
          id="address"
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
          readOnly={readOnly}
          required
          id="location"
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
          readOnly={readOnly}
          required
          id="phone"
          type="text"
          pattern="^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$"
          placeholder="123-4567, +7 555 1234567"
          onChange={handleInputChange}
          name="phone"
        ></input>
      </div>
      <div className={`${readOnly ? "hidden" : ""}`}>
        <label className="block text-gray-800" htmlFor="save">
          Save Address?
          <div className="flex">
            <input
              className="form-input form-input__checkbox"
              readOnly={readOnly}
              id="save"
              type="checkbox"
              onChange={handleCheckboxToggle}
              name="save"
            ></input>
            <span className="pl-2">Yes save my address for later.</span>
          </div>
        </label>
      </div>
      <div className="py-2">{children}</div>

      <Button className="w-full mt-4" primary type="submit">
        Finish Order
      </Button>
    </form>
  );
};
