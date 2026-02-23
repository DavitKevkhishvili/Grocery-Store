import type { SetStateAction } from "react";

type MenuProps = {
  setToggleMenu: React.Dispatch<SetStateAction<boolean>>;
};

type FilterContextType = {
  showFilter: boolean;
  setShowFilter: React.Dispatch<SetStateAction<boolean>>;
  category: string;
  setCategory: React.Dispatch<SetStateAction<string>>;
  searchedProduct: string;
  setSearchedProduct: React.Dispatch<SetStateAction<string>>;
};

type CartContextType = {
  showCart: boolean;
  setShowCart: React.Dispatch<SetStateAction<boolean>>;
  cartContent: ProductType[];
  setCartContent: React.Dispatch<SetStateAction<CartItem[]>>;
};

type ProductContextType = {
  filteredProducts: ProductType[];
  setFilteredProducts: React.Dispatch<SetStateAction<ProductType[]>>;
};

type MenuContextType = {
  toggleMenu: boolean;
  setToggleMenu: React.Dispatch<SetStateAction<boolean>>;
};

interface ProductType {
  [x: string]: ReactNode;
  id: string;
  name: string;
  price: number;
  unit: "კგ" | "გ" | "ლ" | "მლ" | "ც" | "მგ";
  category: string;
  defaultAmount: number;
}

type ProductProps = {
  key: string;
  product: ProductType;
};

type CartProductProps = {
  key: string;
  product: ProductType;
};

interface CartItem extends ProductType {
  quantity: number;
}
