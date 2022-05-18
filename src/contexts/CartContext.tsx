import React, { createContext, useEffect, useState } from "react";

//types
import { IItems } from "../types/Items.interface";

type ICartContext = {
  items: IItems[];
  cart: IItems[];
  addItemToCart: (id: string) => void;
  removeItemToCart: (id: string) => void;
};

type IProps = {
  children: React.ReactNode;
};

//create context
const CartContext = createContext({} as ICartContext);

function CartProvider({ children }: IProps) {
  const [items, setItems] = useState<IItems[]>([]);
  const [cart, setCart] = useState<IItems[]>([]);

  // add items into the card
  function addItemToCart(id: string) {
    const item = items.find((item) => item.uniqueId === id);
    const alreadyExist = cart.find((item) => item.uniqueId === id);

    if (item && !alreadyExist) {
      const newCart = cart.concat(item);

      setCart(newCart);
    }
  }

  // remove items from the card
  function removeItemToCart(id: string) {
    const newCart = cart.filter((item) => {
      return item.uniqueId !== id;
    });

    setCart(newCart)
  }

  //fetch API data
  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((response) => setItems(response))
      .catch((error) => console.log("Error on fetch data", error));
  }, []);

  return (
    <CartContext.Provider
      value={{ items, cart, addItemToCart, removeItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
