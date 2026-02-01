import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderLayout from "./layouts/HeaderLayout";
import Home from "./pages/Home";
import Login from "./components/login/Login";
import Registration from "./components/registration/Registration";
import Recover from "./components/recover/Recover";
import Profile from "./components/profile/Profile";
import PersonalInfo from "./components/personalInfo/PersonalInfo";
import MainContextProvider from "./contexts/MainContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "recover",
        element: <Recover />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "personal-info",
        element: <PersonalInfo />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <MainContextProvider>
    <RouterProvider router={router} />
  </MainContextProvider>,
);
