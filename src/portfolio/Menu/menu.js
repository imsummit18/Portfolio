import React from 'react'
import './menu.css'
import{ImCross} from 'react-icons/im'
const Menu = ({menuOpen,setMenuOpen}) => {

  return (
   <>   
   <div className={"menu " + (menuOpen && "active")}>
   {/* <ImCross className='cross-icon icon'/> */}
       <ul className='menu-list'>
           <li   onClick={()=>setMenuOpen(false)}>
               <a href="#intro">Home</a>
           </li>
           <li   onClick={()=>setMenuOpen(false)}>
               <a href="#portfolio">Portfolio</a>
           </li>
           <li   onClick={()=>setMenuOpen(false)} >
               <a href="#">Works</a>
           </li>
           <li    onClick={()=>setMenuOpen(false)}>
               <a href="#testimonial">Testimonial</a>
           </li>
           <li   onClick={()=>setMenuOpen(false)}>
               <a href="#contact">Contact</a>
           </li>
       </ul>
   </div>
   </>
  )
}

export default Menu