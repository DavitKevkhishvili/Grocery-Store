import { useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import type { CartItem } from "../types";

const CartContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showCart, setShowCart] = useState(false);
  const [cartContent, setCartContent] = useState<CartItem[]>([]);
  const [sum, setSum] = useState<number>(0);

  useEffect(() => {
    return setSum(
      cartContent.reduce((acc, item) => acc + item.price * item.quantity, 0),
    );
  }, [cartContent]);

  const increase = (productId: string) => {
    setCartContent((prev) =>
      prev.map((p) =>
        p.id === productId ? { ...p, quantity: p.quantity + 1 } : p,
      ),
    );
  };

  const decrease = (productId: string) => {
    setCartContent((prev) =>
      prev.map((p) => {
        if (p.id === productId) {
          if (p.quantity > 1) {
            return { ...p, quantity: p.quantity - 1 };
          }
        }
        return p;
      }),
    );
  };

  const deleteFromCart = (productId: string) => {
    setCartContent((prev) => prev.filter((p) => p.id !== productId));
  };
  return (
    <CartContext.Provider
      value={{
        showCart,
        setShowCart,
        cartContent,
        setCartContent,
        increase,
        decrease,
        deleteFromCart,
        sum,
        setSum,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
