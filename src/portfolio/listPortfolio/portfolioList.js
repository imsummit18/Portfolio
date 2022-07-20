import React from 'react'
// import './portfolioList.css'
const PortfolioList = ({title,active,id,setSelected}) => {
  return (
    <>
<p className={active?"activeE":"title-portfolio"}
onClick={()=>setSelected(id)}
>{title}</p>
</>

  )
}

export default PortfolioList