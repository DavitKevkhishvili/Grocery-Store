import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../contexts/FilterContext";
import { products } from "../data/productsData";
import type { ProductContextType } from "../types";
import { ProductContext } from "../contexts/ProductContext";

const FilterContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState("ყველა პროდუქტი");
  const [searchedProduct, setSearchedProduct] = useState("");
  const { setFilteredProducts } =
    useContext<ProductContextType>(ProductContext);

  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  const filter = (cat: string, search?: string) => {
    let filtered = products;

    if (cat !== "ყველა პროდუქტი") {
      filtered = products.filter((p) => p.category === cat);
    }

    if (search) {
      filtered = products.filter(
        (p) =>
          p.name.toLowerCase() === search.toLowerCase().trim() ||
          p.id.toLowerCase() === search.toLowerCase().trim(),
      );
      setSearchedProduct("");
    }

    setFilteredProducts(filtered);
  };

  return (
    <FilterContext.Provider
      value={{
        showFilter,
        setShowFilter,
        category,
        setCategory,
        searchedProduct,
        setSearchedProduct,
        filter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
