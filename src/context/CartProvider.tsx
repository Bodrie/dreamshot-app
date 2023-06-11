import React, { PropsWithChildren, useState } from "react";
import { CartContext } from "./CartContext";
import { CartItem } from "../types";

const CartProvider = ({ children }: PropsWithChildren) => {
  const [cartState, setCartState] = useState<CartItem[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <CartContext.Provider
      value={{ cartState, setCartState, totalAmount, setTotalAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
