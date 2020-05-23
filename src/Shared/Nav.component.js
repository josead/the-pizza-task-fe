import React from "react";

import logo from "../assets/logo.png";
import cart from "../assets/cart.svg";
import { Button } from "./Button.component";

export const Nav = () => {
  return (
    <div className="w-full h-16 shadow-xs fixed">
      <div className="flex w-full h-full">
        <a href="#" className="h-full flex items-center">
          <img id="logo" src={logo} alt="Pizza Task" className="p-4 h-full" />
          <h1 className="text-xl py-4">Pizza Task</h1>
        </a>
        <div className="flex-grow"></div>
        <div className="flex items-center">
          <a href="#orders">
            <Button noBorder noColor className="bg-white">
              Your Orders
            </Button>
          </a>
          <div className="mx-4">
            <a href="#cart">
              <Button noColor noBorder>
                <img src={cart} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
