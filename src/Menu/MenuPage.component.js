import React, { useEffect, useState } from "react";
import { Menu } from "./Menu.component";
import { Empty } from "../Shared/Empty.component";
import { Page } from "../Shared/Page.component";

export const MenuPage = ({ menuService }) => {
  const [pizzas, setPizzas] = useState(null);

  useEffect(() => {
    if (!pizzas) {
      (async () => {
        const pizzasFromMenu = await menuService.getMenu();

        setPizzas(pizzasFromMenu);
      })();
    }
  });

  return (
    <Page>
      {pizzas ? <Menu pizzas={pizzas} /> : <Empty>Fetching Menu...</Empty>}
    </Page>
  );
};
