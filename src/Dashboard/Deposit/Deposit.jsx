import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Deposit.css";

const Deposit = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleMethodSelection = (method) => {
    setSelectedMethod(method);
    toast.success(`You have chosen ${method} as your payment method`);
  };

  return (
    <div className="Deposit">
      <h2>Fund Your Account</h2>
      <form className="depositWrap">
        <section>
          <label>Enter Amount</label>
          <input type="amount" placeholder="Enter Amount" required/>
        </section>
        <div className="method">
          <label>Choose Payment Method from the list below</label>
          <section>
            <button
              className={selectedMethod === "Ethereum" ? "active" : ""}
              onClick={() => handleMethodSelection("Ethereum")}
            >
              Ethereum
            </button>
            <button
              className={selectedMethod === "Bitcoin" ? "active" : ""}
              onClick={() => handleMethodSelection("Bitcoin")}
            >
              Bitcoin
            </button>
          </section>
        </div>
        <button type="submit" disabled={!selectedMethod}>Proceed to Payment</button>
      </form>
    </div>
  );
};

export default Deposit;
