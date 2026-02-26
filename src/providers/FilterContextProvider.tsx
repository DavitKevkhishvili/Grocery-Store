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
  const { setFilteredProducts } =
    useContext<ProductContextType>(ProductContext);

  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  const searchFilter = useCallback(
    (search: string) => {
      let filtered = products;
      if (search) {
        filtered = products.filter(
          (p) =>
            p.name.toLowerCase().includes(search.toLowerCase().trim()) ||
            p.id.toLowerCase().includes(search.toLowerCase().trim()),
        );
      }

      setFilteredProducts(filtered);
    },
    [products],
  );

  const categoryFilter = useCallback(
    (cat: string) => {
      let filtered = products;

      if (cat !== "ყველა პროდუქტი") {
        filtered = products.filter((p) => p.category === cat);
      }
      setFilteredProducts(filtered);
      setSearchedProduct("");
    },
    [products],
  );

  const debouncedFilter = useMemo(
    () =>
      debounce((value) => {
        searchFilter(value);
      }, 500),
    [searchFilter],
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
        searchFilter,
        categoryFilter,
        debouncedFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
