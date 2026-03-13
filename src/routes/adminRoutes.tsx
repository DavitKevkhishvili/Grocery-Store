import { Navigate } from "react-router-dom";
import AdminLayout from "../admin/layouts/AdminLayout";
import AdminProducts from "../admin/pages/AdminProducts";
import Categories from "../admin/pages/Categories";
import Customers from "../admin/pages/Customers";
import Dashboard from "../admin/pages/Dashboard";
import Orders from "../admin/pages/Orders";

export const adminRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    {
      index: true,
      element: <Navigate to="dashboard" replace />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "orders",
      element: <Orders />,
    },
    {
      path: "products",
      element: <AdminProducts />,
    },
    {
      path: "categories",
      element: <Categories />,
    },
    {
      path: "customers",
      element: <Customers />,
    },
  ],
};
