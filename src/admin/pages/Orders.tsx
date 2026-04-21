import { orders } from "../data/orders";
import { statusColors } from "../data/statusColors";
import { statuses } from "../data/statuses";
import { formatDate } from "../utils";

const Orders: React.FC = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto w-full h-screen p-4 lg:p-6">
        <div className="space-y-5  pb-30">
          <div>
            <h1 className="text-xl lg:text-2xl font-bold text-dark">
              შეკვეთები
            </h1>
            <p className="text-sm text-light-grey mt-0.5">
              სულ {orders.length} შეკვეთა
            </p>
          </div>
          <div className="flex gap-2 overflow-x-auto lg:flex-wrap pb-1 scrollbar-width: none">
            {statuses.map((s) => (
              <button
                key={s}
                className="shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer bg-white text-grey border-gray-200 hover:border-green"
              >
                {s}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm ">
            <div className="hidden lg:flex justify-between px-4 py-3 border-b border-gray-100">
              <span className="flex-1 text-xs font-semibold text-light-grey uppercase tracking-wide whitespace-nowrap">
                შეკვ. ID
              </span>
              <span className="flex-1 text-xs font-semibold text-light-grey uppercase tracking-wide whitespace-nowrap">
                მომხმარებელი
              </span>
              <span className="flex-1 text-xs font-semibold text-light-grey uppercase tracking-wide whitespace-nowrap">
                პოზიციები
              </span>
              <span className="flex-1 text-xs font-semibold text-light-grey uppercase tracking-wide whitespace-nowrap">
                სულ
              </span>
              <span className="flex-1 text-xs font-semibold text-light-grey uppercase tracking-wide whitespace-nowrap">
                დრო
              </span>
              <span className="flex-1 text-xs font-semibold text-light-grey uppercase tracking-wide whitespace-nowrap">
                სტატუსი
              </span>
            </div>

            {orders.map((o) => (
              <div
                key={o.id}
                className="px-4 py-3.5 border-b border-gray-50 last:border-0 hover:bg-gray-50/60 transition-colors cursor-pointer lg:cursor-default"
              >
                <div
                  key={o.id}
                  className="flex items-start justify-between gap-2 lg:hidden"
                >
                  <div>
                    <span className="font-mono text-xs font-semibold text-green">
                      {o.id}
                    </span>

                    <p className="font-semibold text-dark text-sm">
                      {o.customer}
                    </p>
                    <p className="text-xs text-light-grey mt-0.5">{o.phone}</p>
                    <p className="text-xs text-light-grey mt-0.5">
                      {o.products.length} პოზ.
                    </p>
                    <p className="text-xs text-light-grey mt-0.5">
                      {formatDate(o.date)}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-10 py-2">
                    <span className="font-bold text-dark text-sm">
                      {o.total}ლ
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${statusColors[o.status as StatusType]}`}
                    >
                      {o.status}
                    </span>
                  </div>
                </div>

                <div className="hidden lg:flex justify-between items-center">
                  <span className="flex-1 font-mono text-xs font-semibold text-green whitespace-nowrap">
                    {o.id}
                  </span>
                  <div className="flex-1">
                    <p className="font-semibold text-dark text-sm">
                      {o.customer}
                    </p>
                    <p className="text-xs text-light-grey">{o.phone}</p>
                  </div>
                  <span className="flex-1 text-sm text-light-grey whitespace-nowrap">
                    {o.products.length} პოზ.
                  </span>
                  <span className="flex-1 font-semibold text-dark whitespace-nowrap">
                    {o.total}ლ
                  </span>
                  <span className="flex-1 text-xs text-light-grey whitespace-nowrap">
                    {formatDate(o.date)}
                  </span>
                  <div className="flex-1">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${statusColors[o.status as StatusType]}`}
                    >
                      {o.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
