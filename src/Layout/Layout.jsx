import React from 'react'
import './Layout.css'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import ScrollToTop from '../Components/ScrollToTop'

const Layout = ({ scrollToInvestment }) => {
  return (
    <div className='Layout'>
      <ScrollToTop/>
        <Header  scrollToInvestment={scrollToInvestment} />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout