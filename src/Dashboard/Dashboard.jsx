import React, { useState } from 'react';
import './Dashboard.css'
import Sidebar from './Sidebar/Sidebar'
import AhmDashHeader from './AhmDashHeader'
import { Outlet } from 'react-router-dom'
import SidebarSub from './Sidebar/SidebarSub';
import AdmSide from './Admside/AdmSide';

const Dashboard = ({showModal,setShowModal}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const date = new Date();
  const formatted = date.getFullYear();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="Dashboard">
      <div className="deskTopHead">
        <AhmDashHeader />
      </div>
      <article>
        <aside>
          <Sidebar showModal={showModal} setShowModal={setShowModal} />
        </aside>
        <div
          className={`sidebarSub ${isSidebarOpen ? "open" : ""}`}
        >
          {isSidebarOpen ? <SidebarSub  toggleSidebar={toggleSidebar} />: null}
        </div>
        <main className={`${isSidebarOpen ? "main-expanded" : ""}`}>
          <header>
            <AdmSide toggleSidebar={toggleSidebar} />
          </header>
          <Outlet />
          <div className="copyRight">
            All Rights Reserved © Toptiertrade {formatted}
          </div>
        </main>
      </article>
    </div>
  );
};

export default Dashboard