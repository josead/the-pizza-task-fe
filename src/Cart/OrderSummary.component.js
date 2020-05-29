import React from "react";
import { Price } from "../Shared/Price.component";

export const OrderSummary = ({ itemsCount, subtotalPrice, deliveryFee }) => {
  if (!itemsCount || !subtotalPrice || !deliveryFee) return "Empty order";
  return (
    <>
      <div className="flex flex-grow mt-8 lg:mt-4">
        <div className="mb-2 w-full ">
          <h3 className="font-bold text-base whitespace-no-wrap lg:text-center">
            ORDER SUMMARY
          </h3>
        </div>
      </div>
      <div className="p-2 px-4 border-solid border-2 border-gray-700">
        <p className="flex justify-between font-bold w-full">
          <span>subtotal ({itemsCount})</span>
          <Price {...subtotalPrice}></Price>
        </p>
        {deliveryFee ? (
          <p className="flex pt-2 justify-between font-bold w-full">
            <span>shipping</span>
            <Price {...deliveryFee}></Price>
          </p>
        ) : (
          "calculating"
        )}
        <p className="w-full my-4 border-b-1 border border-solid border-gray-300"></p>
        <p className="flex pt-2 justify-between font-bold w-full">
          <span>estimated total</span>
          {deliveryFee ? (
            <Price
              value={deliveryFee.value + subtotalPrice.value}
              currency={subtotalPrice.currency}
            ></Price>
          ) : (
            "calculating"
          )}
        </p>
      </div>
    </>
  );
};
