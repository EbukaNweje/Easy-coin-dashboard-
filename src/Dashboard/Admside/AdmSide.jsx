import React, { useState } from "react";
import "./Admside.css";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdPerson, IoMdArrowDropup } from "react-icons/io";

const AdmSide = ({ toggleSidebar, setIsSidebarOpen }) => {
      const [isDarkMode, setIsDarkMode] = useState(false);
      const [showProfile, setShowProfile] = useState(false)
    
      const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
          document.documentElement.setAttribute("data-theme", "dark");
        } else {
          document.documentElement.setAttribute("data-theme", "light");
        }
      };
  return (
        <div className="Admside">
          <div className="Menu">
          Toptiertrade
            <IoMenuOutline 
            size={30} cursor={"pointer"}
            className="burgerMenu" onClick={toggleSidebar}
            />
          </div >
          {/* <nav>
            <div className="btnHolder">
              <button style={{ backgroundColor: "#ffad46" }}>Fund your Account</button>
              <button>Withdraw Funds</button>
            </div>
            <ul>
              <div className="mode">
                <button onClick={toggleDarkMode}>
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </button>
              </div>
              <div className="language">
                <select name="" id="">
                  <option disabled selected>
                    Select a language
                  </option>
                  <option value="Arabian">Arabian</option>
                  <option value="English">English</option>
                  <option value="Avar">Avar</option>
                </select>
                <span>Powered by Google Translate</span>
              </div>
              <IoMdPerson size={25} color="white" cursor={"pointer"} onClick={() => setShowProfile(!showProfile)}/>
              {
                showProfile ?   <div className="profile">
                <IoMdArrowDropup  size={35} />
                <div className="profileInfo">
                  <section>
                    <span>Brewer </span>
                    <span style={{color: ' rgb(108, 117, 125)', fontSize: '12px', lineHeight: '21.84px'}}>brewercw964@gmail.com</span>
                    <button>Account settings</button>
                  </section>
                  <section>
                    <span>Deposit </span>
                    <span>widthdraw</span>
                    <span>Buy plan</span>
                  </section>
                  <section style={{borderBottom: 'none'}}>
                    <span>Logout</span>
                  </section>
                </div>
                </div>: null
              }
            </ul>
          </nav> */}
        </div>
  )
}

export default AdmSide