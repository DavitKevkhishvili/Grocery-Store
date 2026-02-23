import FilterContextProvider from "./FilterContextProvider";
import CartContextProvider from "./CartContextProvider";
import ProductContextProvider from "./ProductContextProvider";
import MenuContextProvider from "./MenuContextProvider";

const MainContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <FilterContextProvider>
      <CartContextProvider>
        <ProductContextProvider>
          <MenuContextProvider>{children}</MenuContextProvider>
        </ProductContextProvider>
      </CartContextProvider>
    </FilterContextProvider>
  );
};

export default MainContextProvider;
