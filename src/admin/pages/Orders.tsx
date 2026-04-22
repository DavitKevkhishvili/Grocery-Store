import { useState } from "react";
import Order from "../components/Order/Order";
import OrderDetails from "../components/orderDetails/OrderDetails";
import { ordersData } from "../data/ordersData";
import { statuses } from "../data/statuses";

const detailName = [
  "შეკვ. ID",
  "მომხმარებელი",
  "პოზიციები",
  " სულ",
  "დრო",
  "სტატუსი",
];

const Orders: React.FC = () => {
  const [orderFilter, setOrderFilter] = useState("ყველა");
  const [selectedOrder, setSelectedOrder] = useState<OrderType | null>(null);
  const [orders, setOrders] = useState<OrderType[]>(ordersData);

  const handleStatusChange = (orderId: string, newStatus: StatusType) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o)),
    );
    setSelectedOrder((prev) => (prev ? { ...prev, status: newStatus } : null));
  };

  return (
    <div className="max-w-7xl mx-auto w-full h-screen p-4 lg:p-6">
      <div className="space-y-5  pb-30">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold text-dark">შეკვეთები</h1>
          <p className="text-sm text-light-grey mt-0.5">
            სულ {orders.length} შეკვეთა
          </p>
        </div>
        <div
          className="flex gap-2 overflow-x-auto lg:flex-wrap pb-1"
          style={{ scrollbarWidth: "none" }}
        >
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setOrderFilter(s)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer bg-white text-grey border-gray-200 hover:border-green hover:text-green ${orderFilter === s ? "border-green text-green" : ""}`}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm ">
          <div className="hidden lg:flex justify-between px-4 py-3 border-b border-gray-100">
            {detailName.map((dn) => (
              <span
                key={dn}
                className="flex-1 text-xs font-semibold text-light-grey uppercase tracking-wide whitespace-nowrap"
              >
                {dn}
              </span>
            ))}
          </div>
          {orderFilter === "ყველა"
            ? orders.map((o) => (
                <Order
                  key={o.id}
                  order={o}
                  setSelectedOrder={setSelectedOrder}
                />
              ))
            : orders
                .filter((o) => o.status === orderFilter)
                .map((o) => (
                  <Order
                    key={o.id}
                    order={o}
                    setSelectedOrder={setSelectedOrder}
                  />
                ))}
        </div>
      </div>
      {selectedOrder && (
        <OrderDetails
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
          onStatusChange={(status) =>
            handleStatusChange(selectedOrder.id, status)
          }
        />
      )}
    </div>
  );
};

export default Orders;
