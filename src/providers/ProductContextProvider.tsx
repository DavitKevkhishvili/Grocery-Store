import { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import type { CartContextType, ProductType } from "../types";
import { CartContext } from "../contexts/CartContext";

const ProductContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const { cartContent, setCartContent } =
    useContext<CartContextType>(CartContext);

  const addInCart = (prod: ProductType, productQuantity: number) => {
    const existing = cartContent.find((p) => p.id === prod.id);
    if (existing) {
      setCartContent((prev) =>
        prev.map((p) =>
          p.id === prod.id
            ? { ...p, quantity: p.quantity + productQuantity }
            : p,
        ),
      );
    } else {
      setCartContent((prev) => [
        ...prev,
        { ...prod, quantity: productQuantity },
      ]);
    }
  };
  return (
    <ProductContext.Provider
      value={{
        filteredProducts,
        setFilteredProducts,
        addInCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
