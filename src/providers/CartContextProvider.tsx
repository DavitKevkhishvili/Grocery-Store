import { useState } from "react";
import { CartContext } from "../contexts/CartContext";
import type { CartItem } from "../types";

const CartContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showCart, setShowCart] = useState(false);
  const [cartContent, setCartContent] = useState<CartItem[]>([]);
  return (
    <CartContext.Provider
      value={{
        showCart,
        setShowCart,
        cartContent,
        setCartContent,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
