import { useNavigate } from "react-router-dom";

const MobileNavbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 flex justify-between px-1 shadow-[0_-2px_16px_rgba(0,0,0,0.07)] padding-bottom: env(safe-area-inset-bottom, 6px);">
        <button
          onClick={() => navigate("/admin/dashboard")}
          className="flex flex-col items-center justify-center gap-0.5  py-2 cursor-pointer relative transition-colors text-dark/50 hover:text-green focus:text-green"
        >
          <div className="w-10 h-8 flex items-center justify-center rounded-xl transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10"></path>
            </svg>
          </div>
          <span className="text-[10px] font-normal leading-none">მთავარი</span>
        </button>
        <button
          onClick={() => navigate("/admin/orders")}
          className="flex flex-col items-center justify-center gap-0.5  py-2 cursor-pointer relative transition-colors text-dark/60 hover:text-green focus:text-green"
        >
          <div className="w-10 h-8 flex items-center justify-center rounded-xl transition-colors ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2 M9 5a2 2 0 002 2h2a2 2 0 002-2 M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
          </div>
          <span className="text-[10px] font-normal leading-none">
            შეკვეთები
          </span>
          <span className="absolute top-1.5 right-[calc(50%-22px)] w-4 h-4 bg-red rounded-full text-white text-[9px] flex items-center justify-center font-bold">
            2
          </span>
        </button>
        <button
          onClick={() => navigate("/admin/products")}
          className="flex flex-col items-center justify-center gap-0.5 py-2 cursor-pointer relative transition-colors text-dark/60 hover:text-green focus:text-green"
        >
          <div className="w-10 h-8 flex items-center justify-center rounded-xl transition-colors ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"></path>
            </svg>
          </div>
          <span className="text-[10px] font-normal leading-none">
            პროდუქტები
          </span>
        </button>
        <button
          onClick={() => navigate("/admin/categories")}
          className="flex flex-col items-center justify-center gap-0.5 py-2 cursor-pointer relative transition-colors text-dark/60 hover:text-green focus:text-green"
        >
          <div className="w-10 h-8 flex items-center justify-center rounded-xl transition-colors ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
            </svg>
          </div>
          <span className="text-[10px] font-normal leading-none">
            კატეგორიები
          </span>
        </button>
        <button
          onClick={() => navigate("/admin/customers")}
          className="flex flex-col items-center justify-center gap-0.5 py-2 cursor-pointer relative transition-colors text-dark/60 hover:text-green focus:text-green"
        >
          <div className="w-10 h-8 flex items-center justify-center rounded-xl transition-colors ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75"></path>
            </svg>
          </div>
          <span className="text-[10px] font-normal leading-none">
            მომხმარებლები
          </span>
        </button>
      </nav>
    </>
  );
};

export default MobileNavbar;
