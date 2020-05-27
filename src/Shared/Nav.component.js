import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";

import logo from "../assets/logo.png";
import cart from "../assets/cart.svg";
import { Button } from "./Button.component";

import { usePizzaCartProviderState } from "../Cart/Cart.context";
import { CurrencySwitch } from "../Currency/CurrencySwitch.component";
import OutsideClick from "../helpers/OutsideClick.hoc";

const CartButton = ({ itemsInCart }) => (
  <div className="mx-2 sm:mx-4">
    <Link
      to="/cart"
      title={
        itemsInCart ? `Cart with ${itemsInCart} Pizzas` : "Your Cart is empty"
      }
    >
      <Button noColor noBorder>
        <span
          className={`${
            !itemsInCart ? "hidden" : ""
          } leading-3 absolute p-1 bg-red-700 text-white text-sm rounded-md h-5`}
        >
          {itemsInCart}
        </span>
        <img src={cart} alt="Cart Icon" />
      </Button>
    </Link>
  </div>
);

const MenuButton = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <OutsideClick do={setShow.bind(null, false)}>
      <Button
        noBorder
        noColor
        className="mx-2 text-md"
        onClick={setShow.bind(null, !show)}
      >
        ☰
      </Button>
      <div
        className={`transform w-full bg-white translate-y-16 flex flex-row-reverse ${
          show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } border-b border-solid border-gray-300 transition-all ease-in-out duration-150 fixed top-0 left-0 z-0 p-4`}
      >
        {children}
      </div>
    </OutsideClick>
  );
};

const PizzasButton = withRouter(({ location }) => (
  <div className={`${location.pathname === "/" ? "hidden" : ""} `}>
    <Link to="/">
      <Button noBorder noColor className="bg-white">
        Pizzas Menu
      </Button>
    </Link>
  </div>
));

export const Nav = () => {
  const cartState = usePizzaCartProviderState();

  const [itemsInCart, setItemsInCart] = useState(0);

  useEffect(() => {
    let count = 0;
    Object.keys(cartState).map((pizzaID) => {
      count += cartState[pizzaID].count;
      return null;
    });
    setItemsInCart(count);
  }, [cartState]);

  return (
    <div className="z-10 bg-white w-full h-16 shadow-xs fixed w-screen overflow-x-hidden">
      <div className="flex text-gray-700 w-full h-full max-w-screen-xl m-auto">
        <Link to="/" className="h-full flex flex-2 items-center sm:pr-4">
          <div className="h-full">
            <img id="logo" src={logo} alt="Pizza Task" className="p-4 h-full" />
          </div>
          <h1 className="text-xl py-4">Pizza Task</h1>
        </Link>
        <div className="flex-grow"></div>
        <div className="hidden items-center sm:flex">
          <CurrencySwitch />
          <PizzasButton />
          <CartButton itemsInCart={itemsInCart} />
        </div>
        <div className="flex items-center sm:hidden">
          <CartButton itemsInCart={itemsInCart} />
          <MenuButton>
            <div className="flex flex-col">
              <CurrencySwitch />
              <span className="p-4"></span>
              <PizzasButton />
            </div>
          </MenuButton>
        </div>
      </div>
    </div>
  );
};
