import React from "react";
import { useNavigate } from "react-router-dom";
import './Withdraw.css'

const Withdrawal = () => {
  const navigate = useNavigate();

  return (
    <div className="Withdrawls">
      <h2>Withdrawal Options</h2>
      
      <div className="withdrawalWrap">
        <div className="paymentBox">
          <h3>Ethereum</h3>
          <p>Minimum amount: <span>$100</span></p>
          <p>Maximum amount: <span>$1000000</span></p>
          <p>Charge Type: <span >percentage</span></p>
          <p>Charges Amount: <span >5%</span></p>
          <p>Duration: <span >instant</span></p>
          <button 
            className="paymentBoxBtn"
            onClick={() => navigate("/dashboard/withdraw-funds", { state: { method: "Ethereum" } })}
          >
            <h2>+</h2>
            Request Withdrawal
          </button>
        </div>

        <div className="paymentBox">
          <h3>Bitcoin</h3>
          <p>Minimum amount: <span>$100</span></p>
          <p>Maximum amount:<span>$5000000</span></p>
          <p>Charge Type: <span >percentage</span></p>
          <p>Charges Amount: <span >1%</span></p>
          <p>Duration: <span >instant</span></p>
          <button 
            className="paymentBoxBtn"
            onClick={() => navigate("/dashboard/withdraw-funds", { state: { method: "Bitcoin" } })}
          >
            <h2>+</h2>
            Request Withdrawal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
