import React, { useState } from 'react';
import './Sidebar.css';
import { FaHome, FaBriefcase, FaCoins } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { TbGridDots } from "react-icons/tb";
import { LuRecycle } from "react-icons/lu";
import { IoMdHelpBuoy } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = ({ showModal, setShowModal }) => { 
  const [showButton, setShowButton] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [hasPlan, setHasPlan] = useState(false); 

  const nav = useNavigate();

  const handleMyInvestmentClick = () => {
    if (!hasPlan) {
      setShowModal(true); 
    } else {
      // nav('/my-investment');
      console.log('working');
      
    }
  };

  return (
    <div className='Sidebar'>
      <div className="sideBarHead">
        <span>
          Brewer c.w 
          <MdOutlineArrowDropDown cursor={'pointer'} onClick={() => setShowButton(!showButton)} />
        </span>
        {showButton && <button onClick={() => nav('/dashboard/account-settings')}>Account settings</button>}
      </div>
      <div className="sideBarContent">
        <button>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'activeLink' : '')}>
            <FaHome size={25} /> Dashboard
          </NavLink>
        </button>
        <button>
          <NavLink to="tradinghistory" className={({ isActive }) => (isActive ? 'activeLink' : '')}>
            <GiNetworkBars size={25} /> Profit Records
          </NavLink>
        </button>
        <button>
          <NavLink to="accounthistory" className={({ isActive }) => (isActive ? 'activeLink' : '')}>
            <FaBriefcase size={25} /> Transaction History
          </NavLink>
        </button>
        <button>
          <NavLink to="asset-balance" className={({ isActive }) => (isActive ? 'activeLink' : '')}>
            <FaCoins size={25} /> Crypto Exchange
          </NavLink>
        </button>
        <button>
          <NavLink to="subtrade" className={({ isActive }) => (isActive ? 'activeLink' : '')}>
            <TbGridDots size={25} /> Subscription Trade
          </NavLink>
        </button>
        <div className="dropDown">
          <span>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink dropA' : 'dropA')}>
              <p><LuRecycle size={25} /> Invest</p>  
              <MdOutlineArrowDropDown cursor={'pointer'} onClick={() => setDropDown(!dropDown)} />
            </NavLink>
          </span>
          {dropDown && (
            <ul>
              <li onClick={() => nav('buy-plan')}>Subscription to a plan</li>
              <li onClick={()=>handleMyInvestmentClick()}>My Investment</li>
            </ul>
          )}
        </div>
        <button>
          <NavLink to="referuser" className={({ isActive }) => (isActive ? 'activeLink' : '')}>
            <LuRecycle size={25} /> Refer Users
          </NavLink>
        </button>
        <button>
          <NavLink to="support" className={({ isActive }) => (isActive ? 'activeLink' : '')}>
            <IoMdHelpBuoy size={25} /> Help/Support
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
