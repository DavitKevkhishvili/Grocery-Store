import { createContext } from "react";
import type { FilterContextType } from "../types";

export const FilterContext = createContext<FilterContextType>({
  showFilter: false,
  setShowFilter: () => {},
  category: "ყველა პროდუქტი",
  setCategory: () => {},
  searchedProduct: "",
  setSearchedProduct: () => {},
  filter: () => {},
});
