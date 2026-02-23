import { useEffect, useState } from "react";
import { MenuContext } from "../contexts/MenuContext";

const MenuContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toggleMenu, setToggleMenu] = useState(false);

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
    <MenuContext.Provider
      value={{
        toggleMenu,
        setToggleMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
