import React, { useEffect, useState } from 'react'
import './contact.css'

const Contact = () => {
    const[email,setEmail]=useState('')
    const [emailE,setEmailE]=useState(false)
    const[message,setMessage]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        setMessage(true);


        useEffect(()=>{
            setTimeout(()=>{
    setMessage(false);
            },3000)
        },[])
       

    }

  
    return (
    <>
    <div className="contact" id='contact'>
        <div className="left-image">
            <img src="assets/shake.svg" alt="" />
        </div>
        <div className="right-text">
            <h1>Contact.</h1>
            <input type="email" 
            className='email'
            value={email}
            placeholder="Enter your Email"
            onChange={(e)=>setEmail(e.target.value)}
          />
            
            <textarea name="message" placeholder='Enter your Message' id="message" cols="30" rows="10"></textarea>
        <button type='submit' className='btn' onClick={handleSubmit} >Send</button>
        {message && <span className='span'> Thanks, I'll contact you soon. </span> }
        </div>
    </div>
    </>
  )
}

export default Contact