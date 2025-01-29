import React from 'react'
import './Login.css'
import { CiMail } from "react-icons/ci";
import { LuKey } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import ScrollToTop from '../../Layout/ScrollToTop'

const Login = () => {
    const currentYear = new Date().getFullYear();
    const Nav = useNavigate()
  return (
    <div className='Login'>
        <ScrollToTop/>
        <div className="logo">
        <img src="https://www.easycoinsignal.com/storage/app/public/photos/9tAyJ7Screenshot_2024-03-08_115753-removebg-preview.png1709895570" alt="logo" />
        </div>
        <form>
            <h3>User Login</h3>
            <section>
                <label>Your Email *</label>
                <div className="inputDiv">
                    <CiMail color='#2980b9'/>
                    <input type="text" placeholder='name@gmail.com'/>
                </div>
            </section>
            <section>
                <label>Password *</label>
                <div className="inputDiv">
                    <LuKey color='#2980b9' />
                    <input type="password"  placeholder='Enter password'/>
                </div>
            </section>
            <div className="rF">
              <div className="rememberMe">
              <input type="checkbox" />
              <span>Remember me</span>
              </div>
              <span style={{lineHeight: '20.8px', fontSize: '13px'}}>Forgot password?</span>
            </div>
            <button onClick={()=> Nav('/dashboard')}>Sign in</button>
            <div className="redirect">
                <span>Don't have an account ?</span> <h4 onClick={() => Nav('/register')}> Sign Up</h4>
            </div>
            <div className="authFooter">
            © Copyright <span>{currentYear}</span> <p>  Easy Coin Signal </p>  All Rights Reserved.
            </div>
        </form>
    </div>
  )
}

export default Login