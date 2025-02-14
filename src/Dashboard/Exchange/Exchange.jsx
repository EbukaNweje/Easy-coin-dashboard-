import React, {useState, useEffect} from 'react'
import './Exchange.css'
import { useSelector } from 'react-redux';
import axios from 'axios';

const Exchange = () => {
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
    <div className='Exchange'>
        <h3>Crypto Exchange</h3>
        <div className="exchangeBoxHolder">
        <section>
          <div className="iconHolder"></div>
          <div className="boxInfo">
            <h3>${userData?.accountBalance || '0.00'}</h3>
            <span>Account balance</span>
          </div>
        </section>
        <section>
          <div className="iconHolder" style={{backgroundColor: '#31ce36'}}></div>
          <div className="boxInfo">
            <h3>$0.00</h3>
          </div>
        </section>
        <section>
          <div className="iconHolder" style={{backgroundColor: '#ffad46'}} ></div>
          <div className="boxInfo">
            <h3>$0.00</h3>
          </div>
        </section>
        <section>
          <div className="iconHolder"></div>
          <div className="boxInfo">
            <h3>$5.00</h3>
          </div>
        </section>
        <section>
          <div className="iconHolder" style={{backgroundColor: '#48abf7'}} ></div>
          <div className="boxInfo">
            <h3>$0.00</h3>
          </div>
        </section>
        <section>
          <div className="iconHolder" style={{backgroundColor: '#f25961'}} ></div>
          <div className="boxInfo">
            <h3>0</h3>
          </div>
        </section>
        <section>
          <div className="iconHolder"style={{backgroundColor: '#31ce36'}} ></div>
          <div className="boxInfo">
            <h3>0</h3>
          </div>
        </section>
        <section>
          <div className="iconHolder"style={{backgroundColor: '#f25961'}} ></div>
          <div className="boxInfo">
            <h3>$0.00</h3>
          </div>
        </section>
        <section>
          <div className="iconHolder"style={{backgroundColor: '#f25961'}} ></div>
          <div className="boxInfo">
            <h3>$0.00</h3>
          </div>
        </section>
        <section>
          <div className="iconHolder"style={{backgroundColor: '#f25961'}} ></div>
          <div className="boxInfo">
            <h3>$0.00</h3>
          </div>
        </section>
        <section>
          <div className="iconHolder"style={{backgroundColor: '#f25961'}} ></div>
          <div className="boxInfo">
            <h3>$0.00</h3>
          </div>
        </section>
        <section>
          <div className="iconHolder"style={{backgroundColor: '#f25961'}} ></div>
          <div className="boxInfo">
            <h3>$0.00</h3>
          </div>
        </section>
      </div>
      <div className="formHold">
        <div className="chartArea"></div>
        <form>
            <section>
                <label>Source Account</label>
                <select name="" id="">
                    <option value=""></option>
                </select>
            </section>
            <section>
                <label>Destination Account</label>
                <select name="" id="">
                    <option value=""></option>
                </select>
            </section>
            <section>
                <label>Amount</label>
                <input type="text" />
            </section>
            <section>
                <label>You will get</label>
                <input type="text" />
            </section>
            <h3>Fees = 880%</h3>
            <button>Exchange</button>
        </form>
      </div>
    </div>
  )
}

export default Exchange