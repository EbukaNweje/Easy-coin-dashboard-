import React, {useState, useEffect} from 'react'
import './DashboardIF.css'
import { useSelector } from 'react-redux';
import axios from 'axios';

const DashboardIF = () => {
  const [userData, setUserData] = useState(null);
  const userId = useSelector((state) => state.toptiertrade.user); 
  console.log("User ID:", userId);

  const date = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  const getOne = async () => {    
    try {
      const response = await axios.get(`https://toptiertrade-back-end-new.vercel.app/api/userdata/${userId}`);
      setUserData(response?.data?.data);
      console.log("getone",response?.data?.data);
      
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    if (userId) getOne();
  }, [userId]);
  return (
    <div className='DashboardIF'>
      <div className="dashboardIFHead">
        <h3>Welcome, {userData?.fullName || 'User'}!</h3>
        <span>Welcome to Toptiertrade For Deposit use the wallet address below for faster transactions bc1qeuvk8709speqcll8wruzvmmc6f3lpajgmz53xe</span>
      </div>
      <div className="dashboardIFBoxHolder">
        <section>
          <div className="iconHolder"></div>
          <div className="boxInfo">
            <h3>${userData?.accountBalance || '0.00'}</h3>
            <span>Account Balance</span>
          </div>
        </section>
        <section>
          <div className="iconHolder" style={{backgroundColor: '#31ce36'}}></div>
          <div className="boxInfo">
            <h3>${userData?.totalProfit || '0.00'}</h3>
            <span>Total Profit</span>
          </div>
        </section>
        <section>
          <div className="iconHolder" style={{backgroundColor: '#ffad46'}} ></div>
          <div className="boxInfo">
            <h3>${userData?.totalDeposit || '0.00'}</h3>
            <span>Total Deposit</span>
          </div>
        </section>
        <section>
          <div className="iconHolder"></div>
          <div className="boxInfo">
            <h3>${userData?.bonus || '0.00'}</h3>
            <span>Total Bonus</span>
          </div>
        </section>
        <section>
          <div className="iconHolder" style={{backgroundColor: '#48abf7'}} ></div>
          <div className="boxInfo">
            <h3>${userData?.ref || '0.00'}</h3>
            <span>Total Referral Bonus</span>
          </div>
        </section>
        <section>
          <div className="iconHolder" style={{backgroundColor: '#f25961'}} ></div>
          <div className="boxInfo">
            <h3>{userData?.totalInvestment || '0'}</h3>
            <span>Total Investment Plans</span>
          </div>
        </section>
        <section>
          <div className="iconHolder"style={{backgroundColor: '#31ce36'}} ></div>
          <div className="boxInfo">
            <h3>{userData?.tradingAccounts || '0'}</h3>
            <span>Active Investment Plans</span>
          </div>
        </section>
        <section>
          <div className="iconHolder"style={{backgroundColor: '#f25961'}} ></div>
          <div className="boxInfo">
            <h3>${userData?.totalWithdrawal || '0'}</h3>
            <span>Total Withdrawals</span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DashboardIF