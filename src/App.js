import React from 'react';
import './App.css';

import Portfolio from './portfolio/portfolio';

function App() {
  const isLogged=false;
  const data={
    'st':"User not logged in"
  }
  return( 
<>



  

    <Portfolio/>
</>
  )

  ;
}

export default App;
