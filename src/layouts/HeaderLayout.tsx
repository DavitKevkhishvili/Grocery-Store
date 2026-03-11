import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useContext } from "react";
import type { FilterContextType, CartContextType } from "../types/publicTypes";
import { CartContext } from "../contexts/CartContext";
import { FilterContext } from "../contexts/FilterContext";

const HeaderLayout: React.FC = () => {
  const { setShowCart } = useContext<CartContextType>(CartContext);
  const { setShowFilter } = useContext<FilterContextType>(FilterContext);
  return (
    <div
      onClick={() => {
        setShowFilter(false);
        setShowCart(false);
      }}
      className="min-h-screen flex flex-col"
    >
      <header className="sticky top-0 z-2 bg-white">
        <Header />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HeaderLayout;
