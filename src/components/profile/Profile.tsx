import { Outlet, useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full min-h-screen px-6 py-12 lg:flex lg:justify-center">
        <div className="w-full bg-white rounded-xl p-8 flex flex-col items-center lg:w-md lg:h-min [box-shadow:0_4px_20px_rgba(0,0,0,0.1)]">
          <div className="w-24 h-24 bg-light-green rounded-[48px] flex justify-center items-center mb-4">
            <img className="w-12 h-12" src="person.svg" alt="person icon" />
          </div>

          <h1 className="text-xl text-dark font-normal">John Doe</h1>
          <h3 className="text-[16px] font-normal text-light-grey mb-6">
            john@email.com
          </h3>

          <div className="w-full flex flex-col ">
            <button
              onClick={() => navigate("/personal-info")}
              className="w-full h-12 text-[14px] text-grey font-normal flex items-center gap-3 rounded-lg px-2 hover:bg-[#F0FDF4] cursor-pointer"
            >
              <img
                className="w-5 h-5"
                src="person-bold.svg"
                alt="person icon"
              />
              Personal info
            </button>

            <button className="w-full h-12 text-[14px] text-grey font-normal flex items-center gap-3 rounded-lg px-2 hover:bg-[#F0FDF4] cursor-pointer">
              <img className="w-5 h-5" src="order.svg" alt="order icon" />
              Order history
            </button>

            <button className="w-full h-12 text-[14px] text-grey font-normal flex items-center gap-3 rounded-lg px-2 hover:bg-[#F0FDF4] cursor-pointer">
              <img className="w-5 h-5" src="gear.svg" alt="gear icon" />
              Settings
            </button>

            <button
              onClick={() => navigate("/login")}
              className="w-full h-12 text-[14px] text-red font-normal flex items-center gap-3 rounded-lg px-2 hover:bg-[#F0FDF4] cursor-pointer"
            >
              <img className="w-5 h-5" src="logout.svg" alt="logout icon" />
              Logout
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Profile;
