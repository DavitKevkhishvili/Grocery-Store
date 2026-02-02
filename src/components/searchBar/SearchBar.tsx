const Filter: React.FC = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-160 h-24 bg-white rounded-lg [box-shadow:0_4px_20px_rgba(0,0,0,0.1)] p-6 flex items-center gap-4">
          <div className="relative flex-1">
            <input
              className="w-full  h-12 border border-[#D1D5DB] text-black text-[16px] rounded-lg px-4 py-3 placeholder:opacity-50"
              type="text"
              placeholder="Search"
            />
            <button className="cursor-pointer">
              <svg
                className="absolute top-3 right-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.1111 9.77778H10.4L10.1333 9.51111C11.0222 8.53333 11.5556 7.2 11.5556 5.77778C11.5556 2.57778 8.97778 0 5.77778 0C2.57778 0 0 2.57778 0 5.77778C0 8.97778 2.57778 11.5556 5.77778 11.5556C7.2 11.5556 8.53333 11.0222 9.51111 10.1333L9.77778 10.4V11.1111L14.2222 15.5556L15.5556 14.2222L11.1111 9.77778ZM5.77778 9.77778C3.55556 9.77778 1.77778 8 1.77778 5.77778C1.77778 3.55556 3.55556 1.77778 5.77778 1.77778C8 1.77778 9.77778 3.55556 9.77778 5.77778C9.77778 8 8 9.77778 5.77778 9.77778Z"
                  fill="#B2B2B2"
                />
              </svg>
            </button>
          </div>

          <button className="w-20 h-12 lg:w-30 lg:h-12 flex justify-center items-center rounded-lg gap-1 border border-[#D1D5DB] cursor-pointer hover:[box-shadow:0_0_10px_rgba(0,0,0,0.1)]">
            <img
              className="w-4 h-4 lg:w-6 lg:h-6 cursor-pointer"
              src="filter.svg"
              alt="filter icon"
            />
            <h4 className="text-[16px] text-black font-normal">Filter</h4>
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
