import { Outlet } from "react-router-dom";
import MobileHeader from "../components/mobileHeader/MobileHeader";

const AdminLayout: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-screen lg:flex lg:flex-row">
        <header>
          <MobileHeader />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
