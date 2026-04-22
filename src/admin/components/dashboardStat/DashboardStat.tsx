const DashboardStat: React.FC<DashboardStatPropsType> = ({ stat }) => {
  return (
    <>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
        <div className="text-xl lg:text-2xl font-normal text-green">
          {stat.value}
          {stat.label === "დღევანდელი შემოსავალი" ? "ლ" : ""}
        </div>
        <div className="text-xs lg:text-sm font-semibold text-dark mt-0.5">
          {stat.label}
        </div>
      </div>
    </>
  );
};

export default DashboardStat;
