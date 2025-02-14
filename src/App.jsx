import React, { useState } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./auth/Log/Login";
import Signup from "./auth/Signup/Signup";
import Dashboard from "./Dashboard/Dashboard";
import DashboardIF from "./Dashboard/DashboardIF";
import Exchange from "./Dashboard/Exchange/Exchange";
import SubTrade from "./Dashboard/subTrade/SubTrade";
import Referuser from "./referUser/Referuser";
import Transaction from "./Dashboard/History/Transaction";
import Profit from "./Dashboard/History/Profit";
import Help from "./Dashboard/Help/Help";
import Settings from "./Dashboard/Settings/Settings";
import Deposit from "./Dashboard/Deposit/Deposit";
import Plan from "./Dashboard/invest/Plan";
import Sidebar from "./Dashboard/Sidebar/Sidebar";
import WithFunds from "./Dashboard/Withdrawal/WithFunds";
import Withdrawal from "./Dashboard/Withdrawal/Withdrawal";
import { Toaster } from "react-hot-toast";

const AppRouter = () => {
  const [showModal, setShowModal] = useState(false); 

  const router = createHashRouter([
    { path: "/", element: <Login /> },
    { path: "/register", element: <Signup /> },
    {
      path: "dashboard",
      element: <Dashboard showModal={showModal} setShowModal={setShowModal} />,
      children: [
        { path: "", element: <DashboardIF /> },
        { path: "account-settings", element: <Settings /> },
        { path: "asset-balance", element: <Exchange /> },
        { path: "subtrade", element: <SubTrade /> },
        { path: "deposits", element: <Deposit /> },
        { path: "buy-plan", element: <Plan showModal={showModal} setShowModal={setShowModal} /> },
        { path: "tradinghistory", element: <Profit /> },
        { path: "withdraw-funds", element: <WithFunds /> },
        { path: "withdrawals", element: <Withdrawal/> },
        { path: "support", element: <Help /> },
        { path: "referuser", element: <Referuser /> },
        { path: "accounthistory", element: <Transaction /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
      <Toaster/>
    </>
  );
};

export default AppRouter;
