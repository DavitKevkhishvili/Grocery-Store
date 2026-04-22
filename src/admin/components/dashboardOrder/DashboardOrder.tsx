import { statusColors } from "../../data/statusColors";
import { formatDate } from "../../utils";

const DashboardOrder: React.FC<DashboardOrderPropsType> = ({ order }) => {
  return (
    <>
      <div className="lg:flex-1 px-4 py-3.5 border-b border-gray-50 last:border-0 hover:bg-gray-50/60 transition-colors">
        <div className="lg:flex-1 flex items-start lg:items-center justify-between gap-3">
          <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4 min-w-0 flex-1">
            <span className="lg:flex-1 font-mono text-xs font-semibold text-green shirnk-0">
              {order.id}
            </span>
            <span className="lg:flex-1 font-semibold text-dark text-sm truncate">
              {order.customer}
            </span>
            <span className="lg:flex-1 text-xs text-light-grey lg:ml-auto shirnk-0">
              {formatDate(order.date)}
            </span>
          </div>
          <div className="lg:flex-1 flex flex-col lg:flex-row items-end lg:items-center gap-2 shirnk-0">
            <span className="lg:flex-1 font-normal text-dark text-sm">
              {order.total} {order.total ? "ლ" : ""}
            </span>
            <div className="lg:flex-1 ">
              <span
                className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap bg-blue-100 ${statusColors[order.status as StatusType]}`}
              >
                {order.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardOrder;
