import React, { createContext, useEffect, useState } from "react";

//types
import { IDb } from "../types/Items.interface";

type ICartContext = {
  items: IDb[];
};

type IProps = {
  children: React.ReactNode;
};

//create context
const CartContext = createContext({} as ICartContext);

function CartProvider({ children }: IProps) {
  const [items, setItems] = useState<IDb[]>([]);

  //fetch API data
  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((response) => setItems(response));
  }, []);

  return (
    <CartContext.Provider value={{ items }}>{children}</CartContext.Provider>
  );
}

export { CartProvider, CartContext };
