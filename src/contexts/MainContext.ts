import { createContext } from "react";
import type { MainContextType } from "../types";

export const MainContext = createContext<MainContextType>({
  toggleMenu: false,
  setToggleMenu: () => {},
  showFilter: false,
  setShowFilter: () => {},
  showCart: false,
  setShowCart: () => {},
  cartContent: [],
  setCartContent: () => {},
  category: "ყველა პროდუქტი",
  setCategory: () => {},
  filteredProducts: [],
  setFilteredProducts: () => {},
  searchedProduct: "",
  setSearchedProduct: () => {},
});
