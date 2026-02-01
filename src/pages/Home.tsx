import Filter from "../components/filter/Filter";
import Product from "../components/product/Product";

const Home: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-screen px-6 py-12 lg:px-12 flex flex-wrap gap-12 justify-center">
        <Filter />
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
