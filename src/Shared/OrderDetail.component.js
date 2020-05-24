import React from "react";
import { Button } from "./Button.component";

const PizzaPill = ({ name, count, onPlus, onLess }) => {
  if (!count) return "";
  return (
    <span className="md:text-sm text-xs">
      {count >= 1 ? count : ""}x <span className="pr-2">{name}</span>
    </span>
  );
};

export const OrderDetail = () => {
  return (
    <div className="bg-white fixed flex transform md:translate-y-16 bottom-0 md:top-0 w-full h-16 shadow-xs">
      <div className="m-auto w-full max-w-screen-xl flex items-center ">
        <div className="hidden md:block px-4 text-gray-700">Your Order :</div>
        <div className="md:hidden px-4 text-gray-700">
          <Button>Edit</Button>
        </div>
        <div className="hidden sm:block sm:w-1/3 md:w-1/2 md:flex text-gray-700">
          <div className="truncate">
            <PizzaPill name="Mozzarella" count={2} />
            <PizzaPill name="Fugazzeta" count={2} />
            <PizzaPill name="Fugazzeta" count={2} />
            <PizzaPill name="Fugazzeta" count={2} />
            <PizzaPill name="Fugazzeta" count={2} />
            <PizzaPill name="Fugazzeta" count={2} />
            <PizzaPill name="Fugazzeta" count={2} />
          </div>
        </div>
        <div className="flex-grow"></div>
        <div className="pr-4 text-xl text-gray-700">
          Total: <span className="text-gray-800">$20</span>
        </div>
        <div className="pr-4">
          <a href="#checkout">
            <Button primary>Place Order</Button>
          </a>
        </div>
      </div>
    </div>
  );
};
