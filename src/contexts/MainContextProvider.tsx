import { useEffect, useState } from "react";
import { MainContext } from "./MainContext";
import type { CartItem, ProductType } from "../types";

const MainContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartContent, setCartContent] = useState<CartItem[]>([]);
  const [category, setCategory] = useState("ყველა პროდუქტი");
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [searchedProduct, setSearchedProduct] = useState("");

  //Preventing scroll outside of the menu component when it is opened.
  useEffect(() => {
    if (toggleMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [toggleMenu]);

  return (
    <MainContext.Provider
      value={{
        toggleMenu,
        setToggleMenu,
        showFilter,
        setShowFilter,
        showCart,
        setShowCart,
        cartContent,
        setCartContent,
        category,
        setCategory,
        filteredProducts,
        setFilteredProducts,
        searchedProduct,
        setSearchedProduct,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
