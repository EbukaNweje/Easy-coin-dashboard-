import React from 'react'
import './Help.css'

const Help = () => {
  return (
    <div className='Help'>
        <div className="helpWrap">
          <div className="helpHead">
          <h1>Toptiertrade</h1>
            <span>For inquiries, suggestions or complains. Mail us</span>
            <h3>support@Toptiertrade.com</h3>
          </div>
          <div className="helpContent">
            <section>
            <label>Message*</label>
            <textarea name="" id=""></textarea>
            </section>
            <button>Send</button>
          </div>
        </div>
    </div>
  )
}

export default Help