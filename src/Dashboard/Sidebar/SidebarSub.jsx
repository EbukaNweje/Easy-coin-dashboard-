import React, { useState } from 'react';
import './Sidebar.css';
import { FaHome, FaBriefcase, FaCoins } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { TbGridDots } from "react-icons/tb";
import { LuRecycle } from "react-icons/lu";
import { IoMdHelpBuoy } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const SidebarSub = ({toggleSidebar}) => {
  const [showButton, setShowButton] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className='Sidebar'>
      <div className="sideBarHead">
        <span>
          Brewer c.w 
          <MdOutlineArrowDropDown cursor={'pointer'} onClick={() => setShowButton(!showButton)} />
        </span>
        {showButton ? <button>Account settings</button> : null}
      </div>
      <div className="sideBarContent">
        <button  onClick={toggleSidebar}>
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => (isActive ? 'activeLink' : '')}>
            <FaHome size={25} /> Dashboard
          </NavLink>
        </button>
        <button  onClick={toggleSidebar}>
          <NavLink 
            to="tradinghistory" 
            className={({ isActive }) => (isActive ? 'activeLink' : '')}>
            <GiNetworkBars size={25} /> Profit Records
          </NavLink>
        </button>
        <button>
          <NavLink 
            to="accounthistory" 
            onClick={toggleSidebar}
            className={({ isActive }) => (isActive ? 'activeLink' : '')}>
            <FaBriefcase size={25} /> Transaction History
          </NavLink>
        </button>
        <button  onClick={toggleSidebar}>
          <NavLink 
            to="asset-balance" 
            className={({ isActive }) => (isActive ? 'activeLink' : '')}>
            <FaCoins size={25} /> Crypto Exchange
          </NavLink>
        </button>
        <button  onClick={toggleSidebar} >
          <NavLink 
            to="subtrade" 
            className={({ isActive }) => (isActive ? 'activeLink' : '')}>
            <TbGridDots size={25} /> Subscription Trade
          </NavLink>
        </button>
        <div className="dropDown">
          <span>
            <NavLink 
              to="/invest" 
              className={({ isActive }) => (isActive ? 'activeLink dropA' : 'dropA')}>
              <p><LuRecycle size={25} /> Invest</p>  
              <MdOutlineArrowDropDown cursor={'pointer'} onClick={() => setDropDown(!dropDown)} />
            </NavLink>
          </span>
          {dropDown ? (
            <ul>
              <li>Subscription to a plan</li>
              <li>My Investment</li>
            </ul>
          ) : null}
        </div>
        <button onClick={toggleSidebar}        >
          <NavLink 
            to="referuser" 
             className={({ isActive }) => (isActive ? 'activeLink' : '')}>
            <LuRecycle size={25} /> Refer Users
          </NavLink>
        </button>
        <button  onClick={toggleSidebar}        >
          <NavLink 
            to="support" 
            className={({ isActive }) => (isActive ? 'activeLink' : '')}>
            <IoMdHelpBuoy size={25} /> Help/Support
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default SidebarSub;
