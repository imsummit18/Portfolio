import React,{useState,useEffect} from 'react'
import './portfolioList.css'
import { featuredPortfolio,webPortfolio,mobilePortfolio,designPortfolio } from './portfolioData'
import PortfolioList from './portfolioList';

const MainPortfolio = () => {

    const [data,setData]=useState([])
    const[selected,setSelected]=useState("featured")

    const list = [
        {
          id: "featured",
          title: "Featured",
        },
        {
          id: "web",
          title: "Web App",
        },
        {
          id: "mobile",
          title: "Mobile App",
        },
        {
          id: "design",
          title: "Design",
        },
       
      ];

useEffect(()=>{
    switch(selected){
case "featured":
    setData(featuredPortfolio);
    break;

    case "web":
    setData(webPortfolio);
break;


    case "mobile":
    setData(mobilePortfolio);
break;

case "design":
    setData(designPortfolio);
break;
}
},[selected])


  return (
   <div className="portfolioList" id="portfolio">

    <h1>Portfolio</h1>
    <div className="sub-portfolioList">
        {
            list.map(({id,title})=>{
                return(
                    <>
                   <PortfolioList 
                   title={title}
                   id={id}
                   active={selected === id}
                   setSelected={setSelected}

                   />
                    
                    </>
                )

            })
        }
    </div>

  <div className="item-container">
    {
        data.map(({img,id,title})=>{
          return(
<>

<div className="portfolio-image">
                {/* <img src="" alt="name" /> */}
                <img src={img} alt="name" className='image'  />
           
          <h3 className='portfolio-title'>  {title}</h3>

          
            </div>
</>
          )
        })
    }
  </div>
   </div>

  )
}

export default MainPortfolio