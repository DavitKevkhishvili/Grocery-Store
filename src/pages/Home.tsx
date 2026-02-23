import SearchBar from "../components/searchBar/SearchBar";
import Product from "../components/product/Product";
import { useContext } from "react";
import type { MainContextType } from "../types";
import { MainContext } from "../contexts/MainContext";

const Home: React.FC = () => {
  const { filteredProducts } = useContext<MainContextType>(MainContext);

  return (
    <>
      <div className="w-full min-h-screen px-6 py-12 lg:px-12 flex flex-wrap gap-12 justify-center">
        <SearchBar />

        {filteredProducts.length === 0 ? (
          <h1 className="text-xl text-light-grey">პროდუქტი არ მოიძებნა!</h1>
        ) : (
          filteredProducts.map((p) => <Product key={p.id} product={p} />)
        )}
      </div>
    </>
  );
};

export default Home;
