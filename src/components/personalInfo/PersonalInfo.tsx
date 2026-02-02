const PersonalInfo: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-screen px-6 py-12 lg:flex lg:justify-center">
        <div className="w-full bg-white rounded-xl p-8 flex flex-col items-center lg:w-md lg:h-min [box-shadow:0_4px_20px_rgba(0,0,0,0.1)]">
          <h1 className="text-xl text-dark font-normal mb-6">
            Personal Information
          </h1>

          <div className="w-full">
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
                Phone Number
              </h4>
              <input
                className="w-full h-12 border border-[#D1D5DB] text-black text-[16px] rounded-lg px-4 py-3 placeholder:opacity-50"
                type="text"
                placeholder="+995 555 12 34 56"
              />
            </div>

            <div className="w-full h-19.5 mb-6">
              <h4 className="text-[14px] font-normal text-grey mb-2">
                Address
              </h4>
              <input
                className="w-full h-12 border border-[#D1D5DB] text-black text-[16px] rounded-lg px-4 py-3 placeholder:opacity-50"
                type="text"
                placeholder="Rustaveli st."
              />
            </div>

            <div className="w-full h-25.5 mb-6">
              <h4 className="text-[14px] font-normal text-grey mb-2">
                Additional information
              </h4>
              <textarea className="w-full h-auto  border border-[#D1D5DB] text-black text-[16px] rounded-lg px-4 py-3 placeholder:opacity-50" />
            </div>
          </div>

          <div className="w-full flex justify-between">
            <button className="w-30 h-12 bg-green rounded-lg text-white text-[15px] font-normal mb-6 cursor-pointer hover:[box-shadow:0_0_15px_rgba(22,163,74,0.3)]">
              Save
            </button>

            <button
              className="w-30 h-12 bg-red rounded-lg text-white text-[15px] font-normal mb-6 cursor-pointer hover:[box-shadow:0_0_15px_rgba(220,38,38,0.3)]
"
            >
              Discard
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
