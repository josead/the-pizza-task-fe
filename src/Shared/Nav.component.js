import React from "react";

import logo from "../assets/logo.png";
import cart from "../assets/cart.svg";
import { Button } from "./Button.component";

export const Nav = () => {
  return (
    <div className="z-10 bg-white w-full h-16 shadow-xs fixed">
      <div className="flex text-gray-700 w-full h-full max-w-screen-xl m-auto">
        <a href="#home" className="h-full flex flex-2 items-center sm:pr-4">
          <div className="h-full">
            <img id="logo" src={logo} alt="Pizza Task" className="p-4 h-full" />
          </div>
          <h1 className="text-md sm:text-xl py-4">Pizza Task</h1>
        </a>
        <div className="flex-grow"></div>
        <div className="flex items-center">
          <a href="#orders">
            <Button noBorder noColor className="bg-white">
              Quick Order
            </Button>
          </a>
          <div className="mr-2 sm:mx-4">
            <a href="#cart" title="Your Cart is empty">
              <Button noColor noBorder>
                <img src={cart} alt="Cart Icon" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
