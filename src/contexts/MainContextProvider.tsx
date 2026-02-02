import { useEffect, useState } from "react";
import { MainContext } from "./MainContext";

const MainContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

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
      value={{ toggleMenu, setToggleMenu, showFilter, setShowFilter }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
