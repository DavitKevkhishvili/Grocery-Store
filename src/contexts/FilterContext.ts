import { createContext } from "react";
import type { FilterContextType } from "../types/publicTypes";

export const FilterContext = createContext<FilterContextType>({
  showFilter: false,
  setShowFilter: () => {},
  category: "ყველა პროდუქტი",
  setCategory: () => {},
  searchedProduct: "",
  setSearchedProduct: () => {},
  searchFilter: () => {},
  categoryFilter: () => {},
  debouncedFilter: () => {},
});
