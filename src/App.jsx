import React, { useState } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
// import Layout from './Layout/Layout';
// import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import Faq from './pages/Faq/Faq';
// import Contact from './pages/Contact/Contact';
// import Login from './pages/auth/Log/Login';
// import Signup from './pages/auth/Signup/Signup';
import Dashboard from './Dashboard/Dashboard';
import DashboardIF from './Dashboard/DashboardIF'
import Exchange from './Dashboard/Exchange/Exchange';
import SubTrade from './Dashboard/subTrade/SubTrade';
import Referuser from './referUser/Referuser';
import Transaction from './Dashboard/History/Transaction';
import Profit from './Dashboard/History/Profit';
import Help from './Dashboard/Help/Help';

const AppRouter = () => {
  const [scrollToInvestment, setScrollToInvestment] = useState(() => () => {});

  const router = createHashRouter([
    // {
    //   path: '/',
    //   element: <Layout scrollToInvestment={scrollToInvestment} />,
    //   children: [
    //     { path: '', element: <Home setScrollToInvestment={setScrollToInvestment} /> },
    //     { path: '/about', element: <About /> },
    //     { path: '/pricing', element: <Home /> },
    //     { path: '/Faq', element: <Faq /> },
    //     { path: '/Contact', element: <Contact /> },
    //   ],
    // },
    // { path: '/login', element: <Login /> },
    // { path: '/register', element: <Signup/> },
    { path: '/', element: <Dashboard/>, children:[
      {path: '', element: <DashboardIF/>},
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
