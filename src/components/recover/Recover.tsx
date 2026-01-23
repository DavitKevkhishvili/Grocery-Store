const Recover: React.FC = () => {
  return (
    <>
      {/* this first line is temporrary and should be deleted while routing for correct design*/}
      <div className="w-full h-screen px-4 lg:flex lg:justify-center">
        <div className="w-full bg-white rounded-xl p-8 flex flex-col items-center lg:w-md lg:h-min">
          <div className="w-16 h-16 bg-light-green rounded-4xl flex justify-center items-center mb-4">
            <img className="w-8 h-8" src="/lock.svg" alt="lock icon" />
          </div>

          <h1 className="w-auto text-3xl font-normal text-center mb-2">
            Recover Password
          </h1>
          <h3 className="text-[13px] font-normal text-light-grey mb-8 text-center">
            Enter your email to receive reset instructions
          </h3>

          <div className="w-full h-19.5 mb-6">
            <h4 className="text-[14px] font-normal text-grey mb-2">Email</h4>
            <input
              className="w-full h-12 border border-[#D1D5DB] text-black text-[16px] rounded-lg px-4 py-3 placeholder:opacity-50"
              type="email"
              placeholder="example@email.com"
            />
          </div>

          <button className="w-full h-12 bg-green rounded-lg text-white text-[15px] font-normal mb-6">
            Send recover link
          </button>

          <button className="text-[13px] font-normal text-green">
            Back to log in
          </button>
        </div>
      </div>
    </>
  );
};

export default Recover;
