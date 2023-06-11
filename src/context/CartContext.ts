import { createContext } from "react";
import { CartItem } from "../types";

const defaultValue = {
  cartState: [] as CartItem[],
  setCartState: (cartState: CartItem[]) => {},
  totalAmount: 0,
  setTotalAmount: (totalAmount: number) => {},
};

export const CartContext = createContext(defaultValue);
