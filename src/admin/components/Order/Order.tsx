import { statusColors } from "../../data/statusColors";
import { formatDate } from "../../utils";

const Order: React.FC<OrderPropsType> = ({ order, setSelectedOrder }) => {
  const handleOrderClick = () => {
    setSelectedOrder(order);
  };

  return (
    <div
      onClick={handleOrderClick}
      className="px-4 py-3.5 border-b border-gray-50 last:border-0 hover:bg-gray-50/60 transition-colors cursor-pointer lg:cursor-default"
    >
      <div
        key={order.id}
        className="flex items-start justify-between gap-2 lg:hidden"
      >
        <div>
          <span className="font-mono text-xs font-semibold text-green">
            {order.id}
          </span>

          <p className="font-semibold text-dark text-sm">{order.customer}</p>
          <p className="text-xs text-light-grey mt-0.5">{order.phone}</p>
          <p className="text-xs text-light-grey mt-0.5">
            {order.products.length} პოზ.
          </p>
          <p className="text-xs text-light-grey mt-0.5">
            {formatDate(order.date)}
          </p>
        </div>
        <div className="flex flex-col items-end gap-10 py-2">
          <span className="font-normal text-dark text-sm">{order.total}ლ</span>
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${statusColors[order.status as StatusType]}`}
          >
            {order.status}
          </span>
        </div>
      </div>

      <div className="hidden lg:flex justify-between items-center">
        <span className="flex-1 font-mono text-xs font-semibold text-green whitespace-nowrap">
          {order.id}
        </span>
        <div className="flex-1">
          <p className="font-semibold text-dark text-sm">{order.customer}</p>
          <p className="text-xs text-light-grey">{order.phone}</p>
        </div>
        <span className="flex-1 text-sm text-light-grey whitespace-nowrap">
          {order.products.length} პოზ.
        </span>
        <span className="flex-1 font-normal text-sm text-dark whitespace-nowrap">
          {order.total}ლ
        </span>
        <span className="flex-1 text-xs text-light-grey whitespace-nowrap">
          {formatDate(order.date)}
        </span>
        <div className="flex-1">
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${statusColors[order.status as StatusType]}`}
          >
            {order.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Order;
