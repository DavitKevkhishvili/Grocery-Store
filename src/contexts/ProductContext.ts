import { createContext } from "react";
import type { ProductContextType } from "../types/publicTypes";

export const ProductContext = createContext<ProductContextType>({
  filteredProducts: [],
  setFilteredProducts: () => {},
  addInCart: () => {},
});
