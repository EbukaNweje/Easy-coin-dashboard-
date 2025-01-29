import React from 'react'
import { CiMail } from "react-icons/ci";
import ScrollToTop from '../../Layout/ScrollToTop'
import { LuKey } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import './Signup.css'
import { BsPerson, BsPersonCheck } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";


const Signup = () => {
  const currentYear = new Date().getFullYear();
  const Nav = useNavigate()
return (
  <div className='Signup'>
      <ScrollToTop/>
      <div className="logo">
      <img src="https://www.easycoinsignal.com/storage/app/public/photos/9tAyJ7Screenshot_2024-03-08_115753-removebg-preview.png1709895570" alt="logo" />
      </div>
      <form>
          <h3>Create an Account</h3>
          <section>
              <label>UserName *</label>
              <div className="inputDiv">
                  <BsPerson color='#2980b9' size={18}/>
                  <input type="text" placeholder='Enter Unique Username'/>
              </div>
          </section>
          <section>
              <label>FullName *</label>
              <div className="inputDiv">
                  <BsPersonCheck color='#2980b9' size={18} />
                  <input type="password"  placeholder='Enter fullNName'/>
              </div>
          </section>
          <section>
              <label>Your Email *</label>
              <div className="inputDiv">
                  <CiMail color='#2980b9' size={18} />
                  <input type="email"  placeholder='name@gmail.com'/>
              </div>
          </section>
          <section>
              <label>Phone Number *</label>
              <div className="inputDiv">
                  <IoCallOutline color='#2980b9' size={18}/>
                  <input type="password"  placeholder='Enter Phone Number '/>
              </div>
          </section>
          <section>
              <label>Password *</label>
              <div className="inputDiv">
                  <LuKey color='#2980b9' size={18}/>
                  <input type="password"  placeholder='Enter password'/>
              </div>
          </section>
          <section>
              <label>Confirm Password *</label>
              <div className="inputDiv">
                  <LuKey color='#2980b9' size={18} />
                  <input type="password"  placeholder='Confirm Password '/>
              </div>
          </section>
          <section>
              <label>Country *</label>
              <div className="inputDiv">
                  <CiLocationOn color='#2980b9' size={18}/>
                  <select name="" id="">
                    <option value=""></option>
                  </select>
              </div>
          </section>
          <section>
              <label>Referral ID *</label>
              <div className="inputDiv">
                  <BsPerson color='#2980b9' size={18} />
                  <input type="password"  placeholder='Optional referral id'/>
              </div>
          </section>
          <button onClick={() => Nav('/login')}>Register</button>
          <div className="redirect">
              <span>Already have an account </span> <h4 onClick={() => Nav('/login')}> Login</h4>
          </div>
          <div className="authFooter">
          © Copyright <span>{currentYear}</span> <p>  Easy Coin Signal </p>  All Rights Reserved.
          </div>
      </form>
  </div>
)
}

export default Signup