import { useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import type { ProductType } from "../types";

const ProductContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  return (
    <ProductContext.Provider
      value={{
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
