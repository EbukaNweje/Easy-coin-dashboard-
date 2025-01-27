import React from 'react'
import './DashboardIF.css'

const DashboardIF = () => {
  return (
    <div className='DashboardIF'>
      <div className="dashboardIFHead">
        <h3>Welcome, Brewer c.w!</h3>
        <span>Welcome to Toptiertrade For Deposit use the wallet address below for faster transactions bc1qeuvk8709speqcll8wruzvmmc6f3lpajgmz53xe</span>
      </div>
      <div className="dashboardIFBoxHolder">
        <section>
          <div className="iconHolder"></div>
          <div className="boxInfo">
            <h3>$5.00</h3>
            <span>Account Balance</span>
          </div>
        </section>
        <section>
          <div className="iconHolder" style={{backgroundColor: '#31ce36'}}></div>
          <div className="boxInfo">
            <h3>$0.00</h3>
            <span>Total Profit</span>
          </div>
        </section>
        <section>
          <div className="iconHolder" style={{backgroundColor: '#ffad46'}} ></div>
          <div className="boxInfo">
            <h3>$0.00</h3>
            <span>Total Deposit</span>
          </div>
        </section>
        <section>
          <div className="iconHolder"></div>
          <div className="boxInfo">
            <h3>$5.00</h3>
            <span>Total Bonus</span>
          </div>
        </section>
        <section>
          <div className="iconHolder" style={{backgroundColor: '#48abf7'}} ></div>
          <div className="boxInfo">
            <h3>$0.00</h3>
            <span>Total Referral Bonus</span>
          </div>
        </section>
        <section>
          <div className="iconHolder" style={{backgroundColor: '#f25961'}} ></div>
          <div className="boxInfo">
            <h3>0</h3>
            <span>Total Investment Plans</span>
          </div>
        </section>
        <section>
          <div className="iconHolder"style={{backgroundColor: '#31ce36'}} ></div>
          <div className="boxInfo">
            <h3>0</h3>
            <span>Active Investment Plans</span>
          </div>
        </section>
        <section>
          <div className="iconHolder"style={{backgroundColor: '#f25961'}} ></div>
          <div className="boxInfo">
            <h3>$0.00</h3>
            <span>Total Withdrawals</span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DashboardIF