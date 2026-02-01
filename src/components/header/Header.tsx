import { useNavigate } from "react-router-dom";
import Menu from "../menu/Menu";
import { useContext } from "react";
import type { MainContextType } from "../../types";
import { MainContext } from "../../contexts/MainContext";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { toggleMenu, setToggleMenu } =
    useContext<MainContextType>(MainContext);

  return (
    <>
      <div>
        <div className="w-full h-16 bg-white flex justify-between items-center p-4">
          <div className="flex gap-2">
            <img className="w-8 h-8" src="bostani-logo.jpg" alt="logo" />
            <h1 className="text-3xl h-8 -mt-0.75">Fresh Market</h1>
          </div>

          <div className="flex gap-4">
            <button className="cursor-pointer">
              <img src="cart.svg" alt="cart icon" />
            </button>

            <button
              onClick={() => navigate("/profile")}
              className="cursor-pointer"
            >
              <img
                className="w-6 h-6"
                src="person-header.svg"
                alt="human icon"
              />
            </button>

            <button
              onClick={() => setToggleMenu(true)}
              className="cursor-pointer"
            >
              <img src="menu.svg" alt="menu icon" />
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center bg-[#56bf41] px-2 py-2 [box-shadow:0_4px_10px_rgba(0,0,0,0.3)]">
          <div className="lg:flex gap-8">
            <img className="hidden lg:flex w-30 h-30" src="dairy.png" alt="" />
            <div className="lg:flex flex-col items-center justify-center">
              <h1 className="text-[24px] text-center text-white font-black   [text-shadow:-1px_1px_0_#000,-2px_1px_0_#000,-3px_1px_0_#000,-4px_1px_0_#000] lg:text-5xl">
                <span className="text-yellow-300">წალკის</span> რძის პროდუქტები
              </h1>
              <div className="flex items-center gap-2">
                <img className="lg:hidden w-15 h-15" src="dairy.png" alt="" />
                <h1 className="text-[24px] text-center text-white font-black   [text-shadow:-1px_1px_0_#000,-2px_1px_0_#000,-3px_1px_0_#000,-4px_1px_0_#000] lg:text-5xl">
                  ხილ-ბოსტნეული
                </h1>
                <img
                  className="lg:hidden w-15 h-15"
                  src="vegetables.png"
                  alt=""
                />
              </div>
            </div>
            <img
              className="hidden lg:flex w-30 h-30"
              src="vegetables.png"
              alt=""
            />
          </div>
        </div>
        {toggleMenu ? <Menu /> : ""}
      </div>
    </>
  );
};

export default Header;
