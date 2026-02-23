import { useState } from "react";
import { FilterContext } from "../contexts/FilterContext";

const FilterContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState("ყველა პროდუქტი");
  const [searchedProduct, setSearchedProduct] = useState("");

  return (
    <FilterContext.Provider
      value={{
        showFilter,
        setShowFilter,
        category,
        setCategory,
        searchedProduct,
        setSearchedProduct,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
