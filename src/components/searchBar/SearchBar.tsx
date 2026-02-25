import { useContext } from "react";
import type { FilterContextType } from "../../types";
import { categories } from "../../data/categories";
import { FilterContext } from "../../contexts/FilterContext";

const Filter: React.FC = () => {
  const {
    showFilter,
    setShowFilter,
    setCategory,
    category,
    searchedProduct,
    setSearchedProduct,
    filter,
  } = useContext<FilterContextType>(FilterContext);

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-160 h-24 bg-white rounded-lg [box-shadow:0_4px_20px_rgba(0,0,0,0.1)] p-6 flex items-center gap-4 relative">
          <div className="relative flex-1">
            <input
              value={searchedProduct}
              onChange={(e) => setSearchedProduct(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  filter(category, searchedProduct);
                }
              }}
              className="w-full h-12 border border-[#D1D5DB] text-black text-[16px] rounded-lg px-4 py-3 placeholder:opacity-50"
              type="text"
              placeholder="ძებნა"
            />
            <svg
              className="w-4.5 h-4.5 absolute top-4 right-4 text-light-grey/40"
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
                fill="currentColor"
              />
            </svg>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowFilter(!showFilter);
            }}
            className="w-20 h-12 lg:w-30 text-dark text-[10px] lg:text-[12px] font-normal lg:h-12 flex flex-col justify-center items-center rounded-lg gap-1 border border-[#D1D5DB] cursor-pointer hover:[box-shadow:0_0_10px_rgba(0,0,0,0.1)] hover:text-green hover:stroke-green"
          >
            <svg
              className="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_7_182)">
                <path
                  d="M8.33333 16.6667C8.33326 16.8215 8.37634 16.9733 8.45774 17.1051C8.53914 17.2368 8.65563 17.3433 8.79416 17.4125L10.4608 18.2458C10.5879 18.3093 10.7291 18.3393 10.871 18.3329C11.0129 18.3264 11.1509 18.2838 11.2717 18.2091C11.3925 18.1344 11.4922 18.03 11.5613 17.9059C11.6305 17.7818 11.6667 17.6421 11.6667 17.5V11.6667C11.6668 11.2537 11.8204 10.8554 12.0975 10.5492L18.1167 3.89167C18.2245 3.77213 18.2955 3.6239 18.3209 3.4649C18.3463 3.3059 18.3251 3.14294 18.2599 2.99573C18.1947 2.84851 18.0882 2.72335 17.9533 2.63538C17.8185 2.5474 17.661 2.50038 17.5 2.5H2.49999C2.33883 2.50006 2.18115 2.54685 2.04604 2.6347C1.91092 2.72255 1.80419 2.84769 1.73875 2.99497C1.67331 3.14225 1.65198 3.30534 1.67735 3.46449C1.70271 3.62364 1.77368 3.77203 1.88166 3.89167L7.90249 10.5492C8.17961 10.8554 8.33314 11.2537 8.33333 11.6667V16.6667Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_7_182">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            ფილტრი
          </button>

          {showFilter && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-60 bg-white rounded-lg [box-shadow:0_4px_20px_rgba(0,0,0,0.1)] absolute top-27 right-0 p-y-6 flex flex-col divide-y divide-[#D1D5DB]"
            >
              {categories.map((cat) => (
                <button
                  onClick={() => {
                    setCategory(cat);
                    setShowFilter(false);
                    filter(cat, searchedProduct);
                  }}
                  key={cat}
                  className="w-full h-12 px-6 flex justify-start items-center cursor-pointer text-[16px] text-dark font-normal hover:text-green "
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Filter;
