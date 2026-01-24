const Product: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-wrap justify-center p-4 gap-6">
        <div className="w-85 h-81 bg-white rounded-lg p-6">
          <img
            className="w-full h-48 rounded-lg mb-4"
            src="apples.jpg"
            alt="apples image"
          />

          <div>
            <h1 className="text-xl text-dark font-normal mb-3">Apples</h1>

            <div className="flex justify-between items-center">
              <h2 className="text-lg text-green font-normal">GEL4.50/kg</h2>
              <button className="w-21 h-10 bg-green rounded-lg px-4 py-2 flex justify-between items-center mt-[-4]">
                <img className="w-4 h-4" src="cart.svg" alt="cart icon" />
                <h4 className="text-[16px] text-white font-normal">Add</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
