import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";

const MobileHeader: React.FC = () => {
  const [adminMenu, setAdminMenu] = useState(false);
  return (
    <>
      <header className="lg:hidden sticky top-0 z-30 bg-white px-4 py-3 flex items-center justify-between border-b border-light-grey/10">
        <div className="flex items-center gap-2.5">
          <img className="w-8 h-8" src="bostani-logo.jpg" alt="bostani-logo" />
        </div>
        <div className="flex items-center gap-2.5">
          <span className="px-2 py-0.5 bg-red rounded-full text-white text-xs font-normal">
            2 new
          </span>
          <button
            onClick={() => setAdminMenu(true)}
            className="w-9 h-9 flex items-center justify-center rounded-lg cursor-pointer transition-colors text-grey hover:text-green"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 "
            >
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
          </button>
        </div>
        {adminMenu && <Sidebar />}
      </header>
    </>
  );
};

export default MobileHeader;
