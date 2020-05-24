import React from "react";
import "./App.css";

import { Nav } from "./Shared/Nav.component";
import { OrderDetail } from "./Shared/OrderDetail.component";
import { Menu } from "./Menu/Menu.component";

function App() {
  return (
    <div>
      <Nav />
      <OrderDetail />
      <div className="pt-16 md:pt-32 max-w-screen-xl m-auto">
        <div className="p-4">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default App;
