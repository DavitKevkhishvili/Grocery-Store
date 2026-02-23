import { useContext } from "react";
import type {
  CartContextType,
  CartProductProps,
  ProductType,
} from "../../types";

import { CartContext } from "../../contexts/CartContext";

const CartProduct: React.FC<CartProductProps> = ({ product }) => {
  const { setCartContent } = useContext<CartContextType>(CartContext);

  const increase = () => {
    setCartContent((prev) =>
      prev.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
      ),
    );
  };

  const decrease = () => {
    setCartContent((prev) =>
      prev.map((p) => {
        if (p.id === product.id) {
          if (p.quantity > 1) {
            return { ...p, quantity: p.quantity - 1 };
          }
        }
        return p;
      }),
    );
  };

  const deleteFromCart = (prod: ProductType) => {
    setCartContent((prev) => prev.filter((p) => p.id !== prod.id));
  };

  return (
    <>
      <div className="w-full h-30 p-3 flex items-center cursor-pointer hover:bg-light-grey/2">
        <img
          className="w-18 h-18 rounded-lg mr-5"
          src="apples.jpg"
          alt="product image"
        />
        <div className="w-full  flex flex-col justify-between">
          <h4 className="text-[16px] text-dark font-normal mb-3">
            {product.name}
          </h4>

          <div className="w-18 h-7.5 text-light-grey text-[13px] mb-1">
            <button
              onClick={decrease}
              className="w-6 h-full border border-light-grey/30 rounded-l-lg hover:bg-green hover:text-white cursor-pointer"
            >
              -
            </button>
            <button className="w-6 h-full border border-light-grey/30 hover:bg-green hover:text-white cursor-pointer">
              {product.quantity}
            </button>
            <button
              onClick={increase}
              className="w-6 h-full border border-light-grey/30 rounded-r-lg hover:bg-green hover:text-white cursor-pointer"
            >
              +
            </button>
          </div>

          <div className="text-[16px] text-grey font-normal flex items-center gap-1">
            <h5>{product.quantity}</h5>
            <span className="">x</span>
            <div className="flex text-green">
              <h5>{product.price.toFixed(2)}</h5>
              <svg
                className="mt-0.5 -ml-0.5"
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13a6 6 0 1 0 -6 6" />
                <path d="M6 19h12" />
                <path d="M10 5v7" />
                <path d="M14 12v-7" />
              </svg>
            </div>
          </div>
        </div>

        <button onClick={() => deleteFromCart(product)}>
          <svg
            className="cursor-pointer hover:text-red"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M8.33334 9.1665V14.1665"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.6667 9.1665V14.1665"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.8333 5V16.6667C15.8333 17.1087 15.6577 17.5326 15.3452 17.8452C15.0326 18.1577 14.6087 18.3333 14.1667 18.3333H5.83332C5.3913 18.3333 4.96737 18.1577 4.65481 17.8452C4.34225 17.5326 4.16666 17.1087 4.16666 16.6667V5"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.5 5H17.5"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.66666 4.99984V3.33317C6.66666 2.89114 6.84225 2.46722 7.15481 2.15466C7.46737 1.8421 7.8913 1.6665 8.33332 1.6665H11.6667C12.1087 1.6665 12.5326 1.8421 12.8452 2.15466C13.1577 2.46722 13.3333 2.89114 13.3333 3.33317V4.99984"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default CartProduct;
