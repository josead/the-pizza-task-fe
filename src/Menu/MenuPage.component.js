import React, { useEffect } from "react";
import { Menu } from "./Menu.component";
import { Empty } from "../Shared/Empty.component";
import { Page } from "../Shared/Page.component";
import { useSessionStorage } from "../helpers/useStorage.hook";

export const MenuPage = ({ service }) => {
  const [pizzas, setPizzas] = useSessionStorage("menu", null);

  useEffect(() => {
    if (!pizzas || pizzas.length === 0) {
      (async () => {
        const pizzasFromMenu = await service.getMenu();

        setPizzas(pizzasFromMenu);
      })();
    }
  });

  if (pizzas === null) {
    return (
      <Page>
        <Empty>Fetching Menu...</Empty>
      </Page>
    );
  }

  return (
    <>
      {pizzas && pizzas.length > 0 ? (
        <Menu pizzas={pizzas} />
      ) : (
        <Empty>
          Ups! That's odd... Looks like we don't have any pizzas in the menu at
          the moment.
        </Empty>
      )}
    </>
  );
};
