import { createContext } from "react";
import type { CartContextType } from "../types/publicTypes";

export const CartContext = createContext<CartContextType>({
  showCart: false,
  setShowCart: () => {},
  cartContent: [],
  setCartContent: () => {},
  increase: () => {},
  decrease: () => {},
  deleteFromCart: () => {},
  sum: 0,
  setSum: () => {},
});
