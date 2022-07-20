import React ,{useEffect,useRef}from 'react'
import './intro.css'
import {init} from 'ityped'

const Intro = () => {
const textRef=useRef();

useEffect(()=>{
  init(textRef.current, 
    { showCursor: false,
      backDelay:1500,backSpeed:60,
       strings: ['Developer','Designer','content Writer'] })
},[])

return (
  <div className="intro" id='intro'>
    <div className="image-container">
{/* <img src="" alt="name" /> */}
    </div>
    <div className="text-container">
<h2>Hi, I'm</h2>
<h1>SUMIT GHIMIRE</h1>
    <h3>Freelance <span ref={textRef}></span></h3>
    </div>
  </div>
    )
}

export default Intro