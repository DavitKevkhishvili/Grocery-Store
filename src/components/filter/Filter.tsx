const Filter: React.FC = () => {
  return (
    <>
      <div className="w-full h-24 bg-white rounded-lg [box-shadow:0_4px_20px_rgba(0,0,0,0.1)] p-6 flex items-center gap-4">
        <div>
          <input
            className="w-full h-12 border border-[#D1D5DB] text-black text-[16px] rounded-lg px-4 py-3 placeholder:opacity-50"
            type="text"
            placeholder="Search"
          />
          <img src="search.svg" alt="" />
        </div>

        <button className="w-30 h-12 flex justify-center items-center rounded-lg gap-1 border border-[#D1D5DB]">
          <img
            className="w-6 h-6 cursor-pointer"
            src="filter.svg"
            alt="filter icon"
          />
          <h4 className="text-[16px] text-black font-normal">Filter</h4>
        </button>
      </div>
    </>
  );
};

export default Filter;
