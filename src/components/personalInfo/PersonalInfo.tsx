const PersonalInfo: React.FC = () => {
  return (
    <>
      {/* this first line is temporrary and should be deleted while routing for correct design*/}
      <div className="w-full h-screen px-4 lg:flex lg:justify-center">
        <div className="w-full bg-white rounded-xl p-8 flex flex-col items-center lg:w-md lg:h-min">
          <h1 className="text-xl text-dark font-normal">
            Personal Information
          </h1>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
