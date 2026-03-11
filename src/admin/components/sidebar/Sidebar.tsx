const Sidebar: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-[#f2f0f0]/50 flex justify-end absolute top-0 overflow-y-auto z-10">
        <aside className="min-h-screen w-72 bg-white flex flex-col shadow-2xl animation: 0.25s cubic-bezier(0.32, 0.72, 0, 1) 0s 1 normal none running drawerIn">
          <div className="flex items-center justify-end px-5 py-5 border-b border-white/10">
            <button className="w-8 h-8 flex items-center justify-end rounded-lg  text-grey cursor-pointer hover:text-green">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 "
              >
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <nav className="flex-1 py-3 px-3 space-y-1 overflow-y-auto">
            <button className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all cursor-pointer relative text-gray-400  hover:text-green">
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
              <span className="text-sm font-medium">Dashboard</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all cursor-pointer relative bg-green text-white">
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
              <span className="text-sm font-medium">Orders</span>
              <span className="ml-auto w-5 h-5 bg-red rounded-full text-white text-xs flex items-center justify-center font-bold">
                2
              </span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all cursor-pointer relative text-gray-400  hover:text-green">
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
              <span className="text-sm font-medium">Products</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all cursor-pointer relative text-gray-400  hover:text-green">
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
              <span className="text-sm font-medium">Categories</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all cursor-pointer relative text-gray-400  hover:text-green">
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
              <span className="text-sm font-medium">Customers</span>
            </button>
          </nav>
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green flex items-center justify-center text-white font-bold">
                A
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Admin User</p>
                <p className="text-gray-400 text-xs">admin@freshmart.com</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
