import { statusColors } from "../../data/statusColors";
import { formatDate } from "../../utils";
import { statuses } from "../../data/statuses";

const OrderDetails: React.FC<OrderDetailsProps> = ({
  order,
  onClose,
  onStatusChange,
}) => {
  const handleClose = () => {
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    >
      <div className="w-full max-w-2xl bg-white rounded-lg lg:rounded-xl border border-gray-100 shadow-lg overflow-hidden max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between  px-5 lg:px-6  py-4 border-b border-gray-100 bg-white sticky top-0 z-10">
          <h2 className=" text-base lg:text-lg font-bold text-dark">
            {order.id}
          </h2>
          <button
            onClick={handleClose}
            className=" w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 cursor-pointer transition-colors font-bold"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className=" p-5 lg:p-6 overflow-y-auto max-h-[calc(90vh-70px)]">
          <div className="space-y-4 lg:space-y-6">
            {/* Status and Date */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span
                className={`px-2.5 py-1 rounded-full  text-sm font-medium whitespace-nowrap ${statusColors[order.status as StatusType]}`}
              >
                {order.status}
              </span>
              <span className=" text-sm text-light-grey">
                {formatDate(order.date)}
              </span>
            </div>

            {/* Customer Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              {/* Left Column */}
              <div className="space-y-3 lg:space-y-4">
                <div>
                  <p className=" text-light-grey uppercase tracking-wide font-semibold mb-1.5">
                    მომხმარებელი
                  </p>
                  <p className="text-sm lg:text-base font-medium text-dark">
                    {order.customer}
                  </p>
                </div>
                <div>
                  <p className=" text-light-grey uppercase tracking-wide font-semibold mb-1.5">
                    ტელეფონი
                  </p>
                  <p className="text-sm lg:text-base font-medium text-dark">
                    {order.phone}
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <p className=" text-light-grey uppercase tracking-wide font-semibold mb-1.5">
                  მიტანის მისამართი
                </p>
                <p className="text-sm lg:text-base text-dark leading-relaxed">
                  {order.address}
                </p>
              </div>
            </div>

            {/* Order Items Table */}
            <div>
              <p className=" text-light-grey uppercase tracking-wide font-semibold mb-2">
                შეკვეთის პოზიციები
              </p>
              <div className="border border-gray-100 rounded-lg overflow-x-auto">
                <table className="w-full text-[10px]  lg:text-sm">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="text-left  px-2.5 lg:px-4  py-2 lg:py-3 text-light-grey font-semibold whitespace-nowrap">
                        პროდუქტი
                      </th>
                      <th className="text-center px-1  lg:px-3  py-2 lg:py-3 text-light-grey font-semibold whitespace-nowrap">
                        რაოდ.
                      </th>
                      <th className="text-right  px-2.5 lg:px-4  py-2 lg:py-3 text-light-grey font-semibold whitespace-nowrap">
                        თანხა
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {order.products.map((product, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className=" px-2.5 lg:px-4  py-2 lg:py-3 text-dark max-w-xs wrap-break-word">
                          {product.name}
                        </td>
                        <td className="px-1  lg:px-3  py-2 lg:py-3 text-center text-dark font-medium whitespace-nowrap">
                          {product.qty}
                        </td>
                        <td className=" px-2.5 lg:px-4  py-2 lg:py-3 text-right font-medium text-dark whitespace-nowrap">
                          {(product.qty * product.price).toFixed(2)}ლ
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-gray-50 border-t border-gray-200">
                    <tr>
                      <td
                        colSpan={2}
                        className=" px-2.5 lg:px-4  py-2 lg:py-3 text-right  lg:text-sm font-bold text-dark"
                      >
                        სულ
                      </td>
                      <td className=" px-2.5 lg:px-4  py-2 lg:py-3 text-right font-bold text-base lg:text-lg text-green whitespace-nowrap">
                        {order.total.toFixed(2)}ლ
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* Status Update Buttons */}
            <div>
              <p className=" text-light-grey uppercase tracking-wide font-semibold mb-2.5">
                სტატუსის განახლება
              </p>
              <div className="flex flex-wrap gap-2">
                {statuses.map(
                  (status) =>
                    status !== "ყველა" && (
                      <button
                        key={status}
                        type="button"
                        onClick={() => onStatusChange(status as StatusType)}
                        className={`inline-flex items-center justify-center gap-2 text-sm font-medium rounded-lg transition-all cursor-pointer active:scale-95 px-3 ${
                          order.status === status
                            ? `${statusColors[status as StatusType]}`
                            : "bg-white border border-gray-300 text-dark hover:bg-gray-50"
                        }`}
                      >
                        {status}
                      </button>
                    ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
