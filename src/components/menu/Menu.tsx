import { useContext } from "react";
import type { MainContextType } from "../../types";
import { MainContext } from "../../contexts/MainContext";

const Menu: React.FC = () => {
  const { setToggleMenu } = useContext<MainContextType>(MainContext);

  return (
    <>
      <div
        onClick={() => setToggleMenu(false)}
        className="w-full min-h-screen bg-[#f2f0f0]/50 flex justify-end absolute top-0 overflow-y-auto z-10"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-70 h-screen bg-white p-6 flex justify-end [box-shadow:-4px_0_20px_rgba(0,0,0,0.1)]"
        >
          <button
            onClick={() => setToggleMenu(false)}
            className="w-5 h-5 flex items-center gap-1 justify-end cursor-pointer mb-6"
          >
            <img className="w-5 h-5" src="close.svg" alt="close icon" />
            <h6 className="text-dark text-[16px]">close</h6>
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
