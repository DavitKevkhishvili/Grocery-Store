type NavItemsType = {
  id: string;
  label: string;
  icon: string;
};

type OrderType = {
  id: string;
  customer: string;
  phone: string;
  address: string;
  products: ItemType[];
  total: number;
  time: string;
  status: string;
};

type ItemType = {
  name: string;
  qty: number;
  price: number;
};

type StatusType =
  | "ახალი"
  | "მიღებული"
  | "მზადდება"
  | "მიტანის პროცესშია"
  | "მიტანილი"
  | "გაუქმებული";

type StatType = {
  label: string;
  value: number;
};
