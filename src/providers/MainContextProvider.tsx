import FilterContextProvider from "./FilterContextProvider";
import CartContextProvider from "./CartContextProvider";
import ProductContextProvider from "./ProductContextProvider";
import MenuContextProvider from "./MenuContextProvider";

const MainContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <CartContextProvider>
      <ProductContextProvider>
        <FilterContextProvider>
          <MenuContextProvider>{children}</MenuContextProvider>
        </FilterContextProvider>
      </ProductContextProvider>
    </CartContextProvider>
  );
};

export default MainContextProvider;
