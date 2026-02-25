import { useNavigate } from "react-router-dom";
import Menu from "../menu/Menu";
import { useContext } from "react";
import type {
  CartContextType,
  MenuContextType,
  ProductContextType,
} from "../../types";
import Cart from "../cart/Cart";
import { CartContext } from "../../contexts/CartContext";
import { MenuContext } from "../../contexts/MenuContext";
import { ProductContext } from "../../contexts/ProductContext";
import { products } from "../../data/productsData";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { toggleMenu, setToggleMenu } =
    useContext<MenuContextType>(MenuContext);
  const { showCart, setShowCart, cartContent } =
    useContext<CartContextType>(CartContext);
  const { setFilteredProducts } =
    useContext<ProductContextType>(ProductContext);

  return (
    <>
      <div className="relative">
        <div className="w-full h-14 bg-white flex justify-between items-center lg:h-27">
          <div className="w-14 h-full flex justify-center items-center gap-2 lg:w-29 ">
            <button
              className="cursor-pointer"
              onClick={() => {
                navigate("/Home");
                setFilteredProducts(products);
              }}
            >
              <img
                className="w-8 h-8 lg:w-16 lg:h-16"
                src="bostani-logo.jpg"
                alt="logo"
              />
            </button>
          </div>

          {/* <div className="h-full flex flex-1 flex-col justify-center items-center bg-[#56bf41]">
            <div className="flex gap-8 justify-center">
              <img
                className="hidden lg:flex w-25 h-25"
                src="dairy.png"
                alt="dairy-icon"
              />
              <div className="lg:flex flex-col items-center justify-center lg:gap-2">
                <h1 className="text-[14px] text-center text-white font-black   [text-shadow:-1px_1px_0_#000,-2px_1px_0_#000,-3px_1px_0_#000,-4px_1px_0_#000] lg:text-4xl">
                  <span className="text-yellow-300">წალკის</span> რძის
                  პროდუქტები
                </h1>
                <div className="flex items-center gap-2">
                  <img
                    className="lg:hidden w-8 h-8"
                    src="dairy.png"
                    alt="dairy-icon"
                  />
                  <h1 className="text-[13px] text-center text-white font-black   [text-shadow:-1px_1px_0_#000,-2px_1px_0_#000,-3px_1px_0_#000,-4px_1px_0_#000] lg:text-4xl">
                    ხილ-ბოსტნეული
                  </h1>
                  <img
                    className="lg:hidden w-8 h-8"
                    src="vegetables.png"
                    alt=""
                  />
                </div>
              </div>
              <img
                className="hidden lg:flex w-25 h-25"
                src="vegetables.png"
                alt=""
              />
            </div>
          </div> */}

          <div className="flex gap-2 px-2 lg:gap-6 lg:p-8">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowCart(!showCart);
              }}
              className="cursor-pointer hover:text-green relative"
            >
              <svg
                className="w-5 h-5 lg:w-7 lg:h-7"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 22C8.55228 22 9 21.5523 9 21C9 20.4477 8.55228 20 8 20C7.44772 20 7 20.4477 7 21C7 21.5523 7.44772 22 8 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 22C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20C18.4477 20 18 20.4477 18 21C18 21.5523 18.4477 22 19 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.04999 2.05H4.04999L6.70999 14.47C6.80757 14.9249 7.06066 15.3315 7.4257 15.6199C7.79074 15.9082 8.24489 16.0603 8.70999 16.05H18.49C18.9452 16.0493 19.3865 15.8933 19.741 15.6078C20.0956 15.3224 20.3421 14.9245 20.44 14.48L22.09 7.05H5.11999"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {cartContent.length > 0 ? (
                <div className="w-4 h-3 lg:w-5 lg:h-4 bg-green rounded-lg absolute -top-0.5 left-3 lg:left-4 text-white text-[8px] lg:text-[10px] font-normal flex justify-center items-center">
                  {cartContent.reduce(
                    (acc, product) => acc + product.quantity,
                    0,
                  )}
                </div>
              ) : (
                <div></div>
              )}
            </button>

            <button
              onClick={() => navigate("/profile")}
              className="cursor-pointer hover:text-green"
            >
              <svg
                className="w-5 h-5 lg:w-7 lg:h-7"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              onClick={() => setToggleMenu(true)}
              className="cursor-pointer hover:text-green"
            >
              <svg
                className="w-5 h-5 lg:w-7 lg:h-7"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 5H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 19H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {showCart && <Cart />}
          </div>
        </div>

        {toggleMenu && <Menu />}
      </div>
    </>
  );
};

export default Header;
