import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { Nav } from "./Shared/Nav.component";
import { OrderDetail } from "./Shared/OrderDetail.component";
import { MenuPage } from "./Menu/MenuPage.component";
import { CartPage } from "./Cart/CartPage.component";
import { CheckoutPage } from "./Checkout/CheckoutPage.component";
import { OrderSuccess } from "./Checkout/OrderSuccess.component";

import { PizzaCartProvider } from "./Cart/Cart.context";
import { CurrencyProvider } from "./Currency/Currency.context";

import { cartService } from "./Cart/Cart.service";
import { currencyService } from "./Currency/Currency.service";
import { checkoutService } from "./Checkout/Checkout.service";
import { menuService } from "./Menu/Menu.service";

function App() {
  document.querySelector(".loading-splash").remove();

  return (
    <PizzaCartProvider>
      <CurrencyProvider service={currencyService}>
        <Router>
          <Nav />
          <Switch>
            <Route path="/checkout">
              <CheckoutPage service={checkoutService} />
            </Route>
            <Route path="/order-success">
              <OrderSuccess />
            </Route>
            <Route path="/cart">
              <OrderDetail />
              <CartPage service={cartService} />
            </Route>
            <Route path="/">
              <OrderDetail />
              <MenuPage service={menuService} />
            </Route>
          </Switch>
        </Router>
      </CurrencyProvider>
    </PizzaCartProvider>
  );
}

export default App;
