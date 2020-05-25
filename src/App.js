import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { Nav } from "./Shared/Nav.component";
import { OrderDetail } from "./Shared/OrderDetail.component";
import { MenuPage } from "./Menu/MenuPage.component";

import { PizzaCartProvider } from "./Cart/Cart.context";

// import { menuService } from "./Menu/Menu.service";
import { menuService } from "./Menu/Menu.service.mock";
import { CartPage } from "./Cart/CartPage.component";

function App() {
  return (
    <PizzaCartProvider>
      <Router>
        <Nav />
        <OrderDetail />
        <Switch>
          <Route path="/checkout"></Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/">
            <MenuPage menuService={menuService} />
          </Route>
        </Switch>
      </Router>
    </PizzaCartProvider>
  );
}

export default App;
