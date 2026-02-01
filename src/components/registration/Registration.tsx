import { useNavigate } from "react-router-dom";

const Registration: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full min-h-screen px-6 py-12 lg:flex lg:justify-center">
        <div className="w-full bg-white rounded-xl p-8 flex flex-col items-center lg:w-md lg:h-min [box-shadow:0_4px_20px_rgba(0,0,0,0.1)]">
          <h1 className="w-auto text-3xl font-normal mb-2">Create Account</h1>
          <h3 className="text-[13px] font-normal text-light-grey mb-8">
            Join Fresh Market today
          </h3>

          <div className="w-full h-full">
            <div className="w-full h-19.5 mb-6">
              <h4 className="text-[14px] font-normal text-grey mb-2">
                First Name
              </h4>
              <input
                className="w-full h-12 border border-[#D1D5DB] text-black text-[16px] rounded-lg px-4 py-3 placeholder:opacity-50"
                type="text"
                placeholder="Name"
              />
            </div>

            <div className="w-full h-19.5 mb-6">
              <h4 className="text-[14px] font-normal text-grey mb-2">
                Last Name
              </h4>
              <input
                className="w-full h-12 border border-[#D1D5DB] text-black text-[16px] rounded-lg px-4 py-3 placeholder:opacity-50"
                type="text"
                placeholder="Lastname"
              />
            </div>

            <div className="w-full h-19.5 mb-6">
              <h4 className="text-[14px] font-normal text-grey mb-2">Email</h4>
              <input
                className="w-full h-12 border border-[#D1D5DB] text-black text-[16px] rounded-lg px-4 py-3 placeholder:opacity-50"
                type="email"
                placeholder="example@email.com"
              />
            </div>

            <div className="w-full h-19.5 mb-6">
              <h4 className="text-[14px] font-normal text-grey mb-2">
                Password
              </h4>
              <input
                className="w-full h-12 border border-[#D1D5DB] text-black text-[16px] rounded-lg px-4 py-3 placeholder:opacity-50"
                type="password"
                placeholder="Password"
              />
            </div>

            <div className="w-full h-19.5 mb-6">
              <h4 className="text-[14px] font-normal text-grey mb-2">
                Confirm Password
              </h4>
              <input
                className="w-full h-12 border border-[#D1D5DB] text-black text-[16px] rounded-lg px-4 py-3 placeholder:opacity-50"
                type="password"
                placeholder="Password"
              />
            </div>

            <button className="w-full h-12 bg-green rounded-lg text-white text-[15px] font-normal mb-6">
              Create Account
            </button>

            <h4 className="text-[#4B5563] text-[13px] font-normal text-center">
              Already have an account?{" "}
              <button onClick={() => navigate("/login")} className="text-green">
                Sign in
              </button>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
