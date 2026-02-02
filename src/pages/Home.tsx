import SearchBar from "../components/searchBar/SearchBar";
import Product from "../components/product/Product";
import { useContext } from "react";
import type { MainContextType } from "../types";
import { MainContext } from "../contexts/MainContext";

const Home: React.FC = () => {
  const { setShowFilter } = useContext<MainContextType>(MainContext);
  return (
    <>
      <div
        onClick={() => setShowFilter(false)}
        className="w-full min-h-screen px-6 py-12 lg:px-12 flex flex-wrap gap-12 justify-center"
      >
        <SearchBar />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
};

export default Home;
