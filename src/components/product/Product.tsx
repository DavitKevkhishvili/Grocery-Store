const Product: React.FC = () => {
  return (
    <>
      <div className="w-81 h-81 bg-white rounded-lg p-6 [box-shadow:0_4px_20px_rgba(0,0,0,0.1)]">
        <img
          className="w-full h-48 rounded-lg mb-4"
          src="apples.jpg"
          alt="apples image"
        />

        <div>
          <h1 className="text-xl text-dark font-normal mb-3">Apples</h1>

          <div className="flex justify-between items-center">
            <h2 className="text-lg text-green font-normal">
              <span className="text-black">GEL </span>4.50/kg
            </h2>
            <button className="w-21 h-10 text-white text-[16px] font-nromal bg-green rounded-lg px-4 py-2 flex justify-between items-center mt-[-4] cursor-pointer hover:[box-shadow:0_0_15px_rgba(22,163,74,0.3)]">
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clipPath="url(#clip0_7_257)">
                  <path
                    d="M5.33332 14.6668C5.70151 14.6668 5.99999 14.3684 5.99999 14.0002C5.99999 13.632 5.70151 13.3335 5.33332 13.3335C4.96513 13.3335 4.66666 13.632 4.66666 14.0002C4.66666 14.3684 4.96513 14.6668 5.33332 14.6668Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.6667 14.6668C13.0349 14.6668 13.3333 14.3684 13.3333 14.0002C13.3333 13.632 13.0349 13.3335 12.6667 13.3335C12.2985 13.3335 12 13.632 12 14.0002C12 14.3684 12.2985 14.6668 12.6667 14.6668Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.36667 1.3667H2.7L4.47334 9.6467C4.53839 9.94994 4.70712 10.221 4.95048 10.4133C5.19384 10.6055 5.49661 10.7069 5.80667 10.7H12.3267C12.6301 10.6995 12.9243 10.5956 13.1607 10.4053C13.397 10.215 13.5614 9.94972 13.6267 9.65336L14.7267 4.70003H3.41334"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7_257">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
