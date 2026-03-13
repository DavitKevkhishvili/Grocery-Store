import { Outlet } from "react-router-dom";
import MobileNavbar from "../components/mobileNavbar/MobileNavbar";
import Sidebar from "../components/sidebar/Sidebar";

const AdminLayout: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-screen lg:flex lg:flex-row">
        <aside>
          <Sidebar />
        </aside>
        <main className="w-full h-screen flex justify-center pb-30 overflow-y-auto">
          <Outlet />
        </main>
        <MobileNavbar />
      </div>
    </>
  );
};

export default AdminLayout;
