import React, { useState } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Login from './auth/Log/Login';
import Signup from './auth/Signup/Signup';
import Dashboard from './Dashboard/Dashboard';
import DashboardIF from './Dashboard/DashboardIF'
import Exchange from './Dashboard/Exchange/Exchange';
import SubTrade from './Dashboard/subTrade/SubTrade';
import Referuser from './referUser/Referuser';
import Transaction from './Dashboard/History/Transaction';
import Profit from './Dashboard/History/Profit';
import Help from './Dashboard/Help/Help';
import Settings from './Dashboard/Settings/Settings';

const AppRouter = () => {
  const [scrollToInvestment, setScrollToInvestment] = useState(() => () => {});

  const router = createHashRouter([
    { path: '/', element: <Login /> },
    { path: '/register', element: <Signup/> },
    { path: 'dashboard', element: <Dashboard/>, children:[
      {path: '', element: <DashboardIF/>},
      {path: 'account-settings', element: <Settings/>},
      {path: 'asset-balance', element: <Exchange/>},
      {path: 'subtrade', element: <SubTrade/>},
      {path: 'tradinghistory', element: <Profit/>},
      {path: 'support', element: <Help/>},
      {path: 'referuser', element: <Referuser/>},
      {path: 'accounthistory', element: <Transaction/>},
    ] },

  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
