import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { FilterContext } from "../contexts/FilterContext";
import { products } from "../data/productsData";
import type { ProductContextType } from "../types";
import { ProductContext } from "../contexts/ProductContext";
import debounce from "lodash.debounce";

const FilterContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState("ყველა პროდუქტი");
  const [searchedProduct, setSearchedProduct] = useState("");
  const { filteredProducts, setFilteredProducts } =
    useContext<ProductContextType>(ProductContext);

  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  const filter = useCallback(
    (cat: string, search?: string) => {
      let filtered = products;

      if (cat !== "ყველა პროდუქტი") {
        filtered = products.filter((p) => p.category === cat);
      }

      if (search) {
        filtered = products.filter(
          (p) =>
            p.name.toLowerCase().includes(search.toLowerCase().trim()) ||
            p.id.toLowerCase().includes(search.toLowerCase().trim()),
        );
      }

      setFilteredProducts(filtered);
    },
    [filteredProducts],
  );

  const debouncedFilter = useMemo(
    () =>
      debounce((cat, value) => {
        filter(cat, value);
      }, 500),
    [filter],
  );

  useEffect(() => {
    return () => {
      debouncedFilter.cancel();
    };
  }, [debouncedFilter]);

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
        debouncedFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
