import React from "react";
import "./App.css";

import { Nav } from "./Shared/Nav.component";
import { OrderDetail } from "./Shared/OrderDetail.component";
import { PizzaCartProvider } from "./Shared/Cart.context";
import { MenuPage } from "./Menu/MenuPage.component";

// import { menuService } from "./Menu/Menu.service";
import { menuService } from "./Menu/Menu.service.mock";

function App() {
  return (
    <PizzaCartProvider>
      <Nav />
      <OrderDetail />
      <div className="pt-16 md:pt-24 max-w-screen-xl m-auto">
        <div className="p-4">
          <MenuPage menuService={menuService} />
        </div>
      </div>
    </PizzaCartProvider>
  );
}

export default App;
