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
              className="w-full h-12 flex items-center gap-3 rounded-lg px-2 hover:bg-[#F0FDF4]"
            >
              <img
                className="w-5 h-5"
                src="person-bold.svg"
                alt="person icon"
              />
              <h4 className="text-[14px] text-grey font-normal">
                Personal info
              </h4>
            </button>

            <button className="w-full h-12 flex items-center gap-3 rounded-lg px-2 hover:bg-[#F0FDF4]">
              <img className="w-5 h-5" src="order.svg" alt="order icon" />
              <h4 className="text-[14px] text-grey font-normal">
                Order history
              </h4>
            </button>

            <button className="w-full h-12 flex items-center gap-3 rounded-lg px-2 hover:bg-[#F0FDF4]">
              <img className="w-5 h-5" src="gear.svg" alt="gear icon" />
              <h4 className="text-[14px] text-grey font-normal">Settings</h4>
            </button>

            <button
              onClick={() => navigate("/login")}
              className="w-full h-12 flex items-center gap-3 rounded-lg px-2 hover:bg-[#F0FDF4]"
            >
              <img className="w-5 h-5" src="logout.svg" alt="logout icon" />
              <h4 className="text-[14px] text-red font-normal">Logout</h4>
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Profile;
