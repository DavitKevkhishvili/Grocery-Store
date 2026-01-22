const Header: React.FC = () => {
  return (
    <>
      <div className="w-full h-16 bg-white flex justify-between items-center p-4 mb-12">
        <div className="flex gap-2">
          <img className="w-8 h-8" src="/leaf.svg" alt="leaf icon" />
          <h1 className="text-3xl h-8 -mt-0.75">Fresh Market</h1>
        </div>

        <div className="flex gap-4">
          <button className="cursor-pointer">
            <img src="/cart.svg" alt="cart icon" />
          </button>

          <button className="cursor-pointer">
            <img className="w-6 h-6" src="/human.svg" alt="human icon" />
          </button>

          <button className="cursor-pointer">
            <img src="/menu.svg" alt="menu icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
