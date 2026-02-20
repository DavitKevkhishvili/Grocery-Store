import CartProduct from "../cartProduct/CartProduct";

const Cart: React.FC = () => {
  return (
    <>
      <div className="w-70 absolute top-17 right-14 lg:top-30 lg:right-30 [box-shadow:0_4px_20px_rgba(0,0,0,0.1)] rounded-lg">
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-70 min-h-30 max-h-89.25 bg-white rounded-t-lg   flex flex-col  items-center divide-y divide-[#D1D5DB] overflow-hidden overflow-y-scroll [&::-webkit-scrollbar]:hidden border-b border-[#D1D5DB]"
        >
          {/* <h3 className="text-[13px] text-light-grey/70 text-center">
          თქვენი კალათა ცარიელია!
        </h3> */}
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </div>
        <div className="w-full h-18 flex justify-between p-3 items-center bg-white rounded-b-lg">
          <div className="flex items-center text-[16px] text-green font-normal">
            <span className="text-dark">ჯამი:</span>
            <span>18</span>
            <svg
              className="-ml-0.5"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
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
          <button className="w-22 h-10 flex justify-center items-center rounded-lg bg-green text-white text-[13px] hover:[box-shadow:0_0_15px_rgba(22,163,74,0.3)] cursor-pointer">
            შეკვეთა
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
