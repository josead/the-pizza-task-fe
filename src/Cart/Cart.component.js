import React from "react";
import { Empty } from "../Shared/Empty.component";
import {
  usePizzaCartProviderState,
  usePizzaCartProviderDispatch,
} from "./Cart.context";

export const Cart = () => {
  const cartState = usePizzaCartProviderState();
  const dispatch = usePizzaCartProviderDispatch();

  const [total, setTotal] = useState(0);
  const [subTotal, setSubtotal] = useState(0);

  useEffect(() => {
    let count = 0;
    Object.keys(cartState).map((pizzaID) => {
      count += cartState[pizzaID].count;
      return null;
    });
    setItemsInCart(count);
  }, [cartState]);

  if (!Object.keys(cartState).length) return <Empty>Nothing in Cart yet</Empty>;

  return <div>{Object.keys(cartState).map}</div>;
};
