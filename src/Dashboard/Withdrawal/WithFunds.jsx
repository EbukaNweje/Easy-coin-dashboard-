import React, { useState } from "react";
import { IoMail } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import './Withdraw.css'

const WithFunds = () => {
    const location = useLocation();
    const paymentMethod = location.state?.method || "Unknown";
  
    const [amount, setAmount] = useState("");
    const [otp, setOtp] = useState("");
    return (
        <div className="withFunds">
          <div className="header">
            <h2 >Request for Withdrawal</h2>
            <button> <IoMail color="white"/> Request OTP</button>
          </div>
          <div className="withFundsWr">
          <div className="boxModal">
            <p >Your Payment Method is <span>{paymentMethod}</span></p>
          </div>
    
          <form className="">
          <section>
          <label>Enter Amount</label>
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              className="w-full p-2 border rounded-md mb-4"
            />
          </section>
    
            <section>
            <label >Enter OTP Code</label>
            <input 
              type="text" 
              value={otp} 
              onChange={(e) => setOtp(e.target.value)} 
              className="w-full p-2 border rounded-md mb-4"
            />
    
            </section>
            <button>
              Confirm Withdrawal
            </button>
          </form>
          </div>
        </div>
      );
}

export default WithFunds