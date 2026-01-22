const Login: React.FC = () => {
  return (
    <>
      {/* this first line is temporrary and should be deleted while routing for correct design*/}
      <div className="w-full h-screen px-4 lg:flex lg:justify-center">
        <div className="w-full h-126 bg-white rounded-xl p-8 flex flex-col items-center lg:w-md">
          <h1 className="w-auto text-3xl font-normal mb-2">Welcome Back</h1>
          <h3 className="text-[13px] font-normal text-light-grey mb-8">
            Sign in to your account
          </h3>

          <div className="w-full h-full">
            <div className="w-full h-19.5 mb-6">
              <h4 className="text-[14px] font-normal text-gray mb-2">Email</h4>
              <input
                className="w-full h-12 border border-[#D1D5DB] text-black text-[16px] rounded-lg px-4 py-3 placeholder:opacity-50"
                type="email"
                placeholder="example@email.com"
              />
            </div>

            <div className="w-full h-19.5 mb-6">
              <h4 className="text-[14px] font-normal text-gray mb-2">
                Password
              </h4>
              <input
                className="w-full h-12 border border-[#D1D5DB] text-black text-[16px] rounded-lg px-4 py-3 placeholder:opacity-50"
                type="password"
                placeholder="Password"
              />
            </div>

            <div className="flex justify-between mb-6">
              <div className="flex gap-2">
                <input type="checkbox" />
                <h4 className="text-[13px] font-normal text-gray">
                  Remember me
                </h4>
              </div>
              <button className="text-[13px] font-normal text-green">
                Forgot password?
              </button>
            </div>

            <button className="w-full h-12 bg-green rounded-lg text-white text-[15px] font-normal mb-6">
              Sign in
            </button>

            <h4 className="text-[#4B5563] text-[13px] font-normal text-center">
              Don't have an account?{" "}
              <button className="text-green">Sign up</button>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
