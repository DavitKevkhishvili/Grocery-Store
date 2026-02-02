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
            className="h-6 flex gap-1 justify-end items-center cursor-pointer mb-6 text-[16px] text-dark font-normal hover:text-green"
          >
            <svg
              className="w-5 h-5 lg:w-7 lg:h-7"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            close
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
