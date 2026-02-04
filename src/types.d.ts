import type { SetStateAction } from "react";

type MenuProps = {
  setToggleMenu: React.Dispatch<SetStateAction<boolean>>;
};

type MainContextType = {
  toggleMenu: boolean;
  setToggleMenu: React.Dispatch<SetStateAction<boolean>>;
  showFilter: boolean;
  setShowFilter: React.Dispatch<SetStateAction<boolean>>;
  showCart: boolean;
  setShowCart: React.Dispatch<SetStateAction<boolean>>;
};
