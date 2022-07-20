import React,{useState} from 'react'
import './portfolio.css'
import Topbar from './topbar/topbar'
import Intro from './Intro/intro'
import Menu from './Menu/menu'
import Contact from './contact/contact'
import Testimonial from './Testimonial/testimonial'
import MainPortfolio from './listPortfolio/MainPortfolio'

const Portfolio = () => {
  const[menuOpen,setMenuOpen]=useState(false)
  
  return (
  <>
<div className="app">
  <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
  <div className="sections">
  <Intro/>
  <MainPortfolio/>
  <Testimonial/>
  <Contact/>
</div>
</div>
  </>
  
    )
}

export default Portfolio