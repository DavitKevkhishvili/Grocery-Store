import { createContext } from "react";
import type { MenuContextType } from "../types/publicTypes";

export const MenuContext = createContext<MenuContextType>({
  toggleMenu: false,
  setToggleMenu: () => {},
});
