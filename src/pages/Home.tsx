import Product from "../components/product/Product";

const Home: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-screen px-6 py-12 lg:px-12 flex flex-wrap gap-12 justify-center">
        <div className="w-full h-24 bg-white rounded-lg"></div>
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
