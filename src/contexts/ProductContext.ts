import { createContext } from "react";
import type { ProductContextType } from "../types";

export const ProductContext = createContext<ProductContextType>({
  filteredProducts: [],
  setFilteredProducts: () => {},
  addInCart: () => {},
});
