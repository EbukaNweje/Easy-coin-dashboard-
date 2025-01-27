import React, { useState } from 'react'
import './Referuser.css'
import CopyToClipboard from "react-copy-to-clipboard";
import {IoLink, IoOpenOutline} from "react-icons/io5";
import {FaRegCopy} from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";


const Referuser = () => {
  const [state, setState] = useState({
    value: "https://ap.Toptiertrade.com/ref/boduxi",
    copied: false,
  });

  return (
    <div className='Referuser'>
        <h3>Refer users to  community</h3>
        <div className="referWrap">
            <div className="copy">
                <span>You can refer users by sharing your referral link:</span>
                <div className="copyInput">
                        <input
                            type="text"
                            className="w-[90%] bg-transparent h-full border-none outline-none"
                            value={state.value}
                        />
                        <CopyToClipboard
                              className = 'clip'
                              text={state.value}
                             onCopy={() => setState({ copied: true })}
                                 >
                                  <p className="w-max flex items-center text-sm">
                            <div className='icon'>
                               {state.copied ? 'copied':  <FaRegCopy/>}
                            </div>
                        </p>
                                 </CopyToClipboard>
                </div>
                <span>You were referred by</span>
                <p>brewer</p>
            </div>
            <div className="referer">
                <span>You were referred by</span>
                <div className="icon"><IoMdPerson size={38}/></div>
                <p>null</p>
            </div>
        </div>
    </div>
  )
}

export default Referuser