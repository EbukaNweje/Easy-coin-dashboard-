import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './Plan.css';
import { MdError } from "react-icons/md";

const Plan = ({ showModal, setShowModal }) => {
  const userId = useSelector((state) => state.toptiertrade.user);
  const [plans, setPlans] = useState([]);
  const [investments, setInvestments] = useState([]);
  const [investmentAmounts, setInvestmentAmounts] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchUserPlans = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://toptiertrade-back-end-new.vercel.app/api/getalluserplan/${userId}`);
      setPlans(response?.data || []);
      console.log('plans',response);
      
      setInvestmentAmounts(
        (response?.data || []).reduce((acc, plan) => ({ ...acc, [plan.id]: plan.price }), {})
      );
    } catch (err) {
      setError('Failed to fetch user plans.');
      console.error('Error fetching user plans:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchInvestments = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://toptiertrade-back-end-new.vercel.app/api/getallinvestmentplan/${userId}`);
      setInvestments(response?.data || []);
      console.log('invest',response);
      
    } catch (err) {
      setError('Failed to fetch investments.');
      console.error('Error fetching investments:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserPlans();
      fetchInvestments();
    }
  }, [userId]);

  const handleAmountChange = (e, id, price) => {
    const newValue = Number(e.target.value);
    if (newValue >= price) {
      setInvestmentAmounts((prev) => ({ ...prev, [id]: newValue }));
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

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="planHolder">
        {plans.length > 0 ? (
          plans.map((plan) => (
            <div key={plan.id} className="planBox">
              <h1>{plan.name}</h1>
              <div className="amount"><h2>${plan.price}</h2></div>
              <div className="data">
                <section><span>Min Deposit:</span><span>${plan.minPD}</span></section>
                <section><span>Max Deposit:</span><span>${plan.maxPD}</span></section>
                <section><span>Min Return:</span><span>{plan.minR}</span></section>
                <section><span>Max Return:</span><span>${plan.maxR}</span></section>
                <section><span>Gift Bonus:</span><span>${plan.gift}</span></section>
                <section><span>Duration:</span><span>{plan.duration}</span></section>
              </div>
              <section className="setAmount">
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
          ))
        ) : (
          <p>No investment plans available.</p>
        )}
      </div>

      <h2>Your Investments</h2>
      {investments.length > 0 ? (
        <table className="investmentTable">
          <thead>
            <tr>
              <th>Plan Name</th>
              <th>Amount Invested</th>
              <th>Returns</th>
              <th>Duration</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {investments.map((investment, index) => (
              <tr key={index}>
                <td>{investment.planName}</td>
                <td>${investment.amountInvested}</td>
                <td>{investment.returns}%</td>
                <td>{investment.duration}</td>
                <td>{investment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No investments found.</p>
      )}
    </div>
  );
};

export default Plan;
