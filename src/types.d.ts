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
  filter: (cat: string, search?: string) => void;
};

type CartContextType = {
  showCart: boolean;
  setShowCart: React.Dispatch<SetStateAction<boolean>>;
  cartContent: ProductType[];
  setCartContent: React.Dispatch<SetStateAction<CartItem[]>>;
  increase: (productId: string) => void;
  decrease: (productId: string) => void;
  deleteFromCart: (productId: string) => void;
  sum: number;
  setSum: React.Dispatch<SetStateAction<number>>;
};

type ProductContextType = {
  filteredProducts: ProductType[];
  setFilteredProducts: React.Dispatch<SetStateAction<ProductType[]>>;
  addInCart: (product: ProductType, productQuantity: number) => void;
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
