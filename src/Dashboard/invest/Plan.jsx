import React, { useState } from 'react';
import './Plan.css';
import { MdError } from "react-icons/md";

const Plan = ({ showModal, setShowModal }) => {  
  const [plans] = useState([
    { id: 1, name: "Professional", price: 1000, minPD: 10000, maxPD: 100000, minR: '30%', maxR: 250000, gift: 10, duration: '12 Hours Reflection' },
    { id: 2, name: "Golden", price: 10000, minPD: 10000, maxPD: 100000, minR: '30%', maxR: 250000, gift: 10, duration: '12 Hours Reflection' },
    { id: 3, name: "Beginners Plan", price: 100, minPD: 10000, maxPD: 100000, minR: '30%', maxR: 250000, gift: 10, duration: '12 Hours Reflection' }
  ]);

  const [investmentAmounts, setInvestmentAmounts] = useState(
    plans.reduce((acc, plan) => ({ ...acc, [plan.id]: plan.price }), {})
  );


  const handleAmountChange = (e, id, price) => {
    const newValue = Number(e.target.value);
    if (newValue >= price) {
      setInvestmentAmounts(prev => ({ ...prev, [id]: newValue }));
    }
  };

  return (
    <div className="Plan">
      <h2>Available Packages</h2>
      {showModal && (
        <div className="modalNot">
          <section>
            <MdError color="lightgrey" size={20} />
            You do not have a package at the moment
          </section>
          <span onClick={() => setShowModal(false)}>x</span>
        </div>
      )}

      <div className="planHolder">
        {plans.map(plan => (
          <div key={plan.id} className="planBox">
            <h1>{plan.name}</h1>
            <div className="amount"><h2>${plan.price}</h2></div>
            <div className="data">
              <section><span>Minimum Possible Deposit:</span><span>${plan.minPD}</span></section>
              <section><span>Maximum Possible Deposit:</span><span>${plan.maxPD}</span></section>
              <section><span>Minimum Return:</span><span>{plan.minR}</span></section>
              <section><span>Maximum Return:</span><span>${plan.maxR}</span></section>
              <section><span>Gift Bonus:</span><span>${plan.gift}</span></section>
              <section><span>Duration:</span><span>{plan.duration}</span></section>
            </div>
            <section className='setAmount'>
              <label>Amount to invest: (${plan.price} default)</label>
              <input
                type="number"
                value={investmentAmounts[plan.id]}
                onChange={(e) => handleAmountChange(e, plan.id, plan.price)}
                min={plan.price}
              />
            </section>
            <button>Join plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
