import { stats } from "../data/stats";
import { ordersData } from "../data/ordersData";
import { formatDate } from "../utils";
import DashboardStat from "../components/dashboardStat/DashboardStat";
import DashboardOrder from "../components/dashboardOrder/DashboardOrder";

const Dashboard = () => {
  const todaysDate = new Date().toISOString();
  return (
    <>
      <div className="max-w-7xl w-full h-screen mx-auto p-4 lg:p-6">
        <div className="space-y-5 pb-30">
          <div>
            <h1 className="text-xl lg:text-2xl font-normal text-dark">
              მთავარი
            </h1>
            <p className="text-sm text-light-grey mt-0.5">
              {formatDate(todaysDate, false)}
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map((s) => (
              <DashboardStat key={s.label} stat={s} />
            ))}
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm ">
            <div className="px-5 py-3.5 border-b border-gray-100">
              <h2 className="font-normal text-dark">ბოლო შეკვეთები</h2>
            </div>

            {ordersData.map((o) => (
              <DashboardOrder key={o.id} order={o} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
