import React, { useState } from 'react'
import './topbar.css'
import {BsFillPersonFill} from 'react-icons/bs'
import {CgMail} from 'react-icons/cg'
import{AiOutlineBars} from 'react-icons/ai'
import{ImCross} from 'react-icons/im'

const Topbar = ({menuOpen,setMenuOpen}) => {

    

    const handleClick=()=>{
        setMenuOpen(!menuOpen)
    }
  return (
  <>
  <div className={"topbar " +(menuOpen &&"active")} id='topbar'>
    <div className="topbar-container">
    <div className="left-side">
        <h1><a href="#intro">sumit.</a></h1>
     </div>
  <div className="right-side">
      <div className="phone-number">
          <p><BsFillPersonFill className='icon'/>+977-9818160442</p>
      </div>
      <div className="email">
          <p><CgMail className='icon'/>sumitghimire018@gmail.com</p>
      </div>
  </div>
    </div>

    <div className="navbar">
<AiOutlineBars className='bar-icon icon' onClick={handleClick}/>
<ImCross className='cross-icon icon'  onClick={handleClick}/>
    </div>
  </div>

  </>
  )
}

export default Topbar