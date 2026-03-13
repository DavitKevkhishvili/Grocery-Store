import { useNavigate } from "react-router-dom";
import { navItems } from "../../data/navItems";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <aside className="hidden lg:flex w-56 shrink-0 bg-white flex-col transition-all duration-300 min-h-screen  relative">
        <div className="flex items-center gap-3 px-4 py-5 border-b border-gray-700">
          <div className="w-8 h-8 rounded-lg bg-green flex items-center justify-center shrink-0">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 text-white"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z M3 6h18 M16 10a4 4 0 01-8 0"></path>
            </svg>
          </div>
          <span className="font-bold text-dark text-sm tracking-wide">
            ბოსტანი
          </span>
        </div>

        <nav className="flex-1 py-4 space-y-1 px-2">
          {navItems.map((i) => (
            <div key={i.id} className="relative group">
              <button
                onClick={() => navigate(`/admin/${i.id}`)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all cursor-pointer text-dark/50 hover:text-white hover:bg-green"
              >
                <img src={i.icon} />
                <span className="text-sm font-normal">{i.label}</span>
                {i.label === "შეკვეთები" && (
                  <span className="ml-auto w-5 h-5 bg-red rounded-full text-white text-xs flex items-center justify-center font-bold">
                    2
                  </span>
                )}
              </button>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green flex items-center justify-center text-white text-xs font-bold shrink-0">
              A
            </div>
            <div className="min-w-0">
              <p className="text-light-grey text-xs font-semibold ">
                Admin User
              </p>
              <p className="text-light-grey text-xs truncate">
                admin@freshmart.com
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
