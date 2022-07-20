import React from 'react'
import './testimonail.css'
import { data } from './testimonialData'

const Testimonial = () => {
  
  return (
 <div className="testimonial" id='testimonial'>
      <h1 className='heading'>Testimonials</h1>
    <div className="sub-testimonail">
    {
      data.map(({id,name,title,img,icon,desc})=>{
        return(
          <>
         <div className="image-testimonial">
        <div className="top-part">
        {/* <img src="assets/right-arrow.png" className='person-img' alt="" /> */}
         
         
         <img src={img} alt="name" className='person-img' />
         <img src={icon} alt="" className='icon-img' />
         
        </div>
        <div className="desc-part">
           <p className='desc'>{desc}</p>
         <p className='name'> {name}</p>
         <p className='title'>{title}</p>
        </div>
         </div>
          
          </>
        )
      })
     }
    </div>
 </div>
  )
}

export default Testimonial