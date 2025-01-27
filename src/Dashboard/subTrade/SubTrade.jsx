import React, { useState } from 'react';
import './SubTrade.css';
import { IoIosClose } from "react-icons/io";

const SubTrade = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="SubTrade">
      <h3>Subscription Trade</h3>
      <div className="subTradeBox">
        <h3>Toptiertrade Account manager</h3>
        <span>
          Don’t have time to trade or learn how to trade? Our Account Management
          Service is The Best Profitable Trading Option for you, We can help you to
          manage your account in the financial MARKET with a simple subscription model.
        </span>
        <span>Terms and Conditions apply</span>
        <span>Reach us at support@Toptiertrade130@gmail.com for more info.</span>
        <button onClick={() => setShowModal(true)}>Subscribe Now</button>
      </div>
      <div className="mtaList"></div>
      <div className="tradingAcct">
        <h3>Connect to your trading account</h3>
      </div>
      {showModal && (
        <div className="subModal" onClick={() => setShowModal(false)}>
          <form onClick={(e) => e.stopPropagation()}>
            <div className="head">
              <h3>Subscribe to Subscription Trading</h3>
              <IoIosClose
                cursor={'pointer'}
                onClick={() => setShowModal(false)}
                size={25}
              />
            </div>
            <div className="inputDiv" style={{ marginBottom: '20px' }}>
              <section>
                <label>Subscription Duration</label>
                <select name="" id="">
                  <option value="">Select Duration</option>
                  <option value="1-month">1 Month</option>
                  <option value="3-months">3 Months</option>
                  <option value="6-months">6 Months</option>
                </select>
              </section>
              <section>
                <label>Amount to Pay</label>
                <input
                  type="text"
                  style={{ backgroundColor: 'var(--container-bg)' }}
                />
              </section>
            </div>
            <div className="inputDiv">
              <section>
                <label>MT4 ID*:</label>
                <input type="text" />
              </section>
              <section>
                <label>MT4 Password*:</label>
                <input type="password" />
              </section>
            </div>
            <div className="inputDiv">
              <section>
                <label>Account Type:</label>
                <input type="text" placeholder="E.g Standard" />
              </section>
              <section>
                <label>Currency*:</label>
                <input type="text" placeholder="E.g USD" />
              </section>
            </div>
            <div className="inputDiv">
              <section>
                <label>Leverage*:</label>
                <input type="text" placeholder="E.g 1:500" />
              </section>
              <section>
                <label>Server*:</label>
                <input type="text" placeholder="E.g HantecGlobal-live" />
              </section>
            </div>
            <div className="below">
              Amount will be deducted from your account balance
              <button
                type="button"
                onClick={() => setShowModal(false)}
              >
                Subscribe Now
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SubTrade;
