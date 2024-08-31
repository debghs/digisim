import './main.css'
import React from 'react'

import Navbar from './../navbar/navbar'

function Main (props) {

  return (
    <div className="main">
      <Navbar/>
      <div className="wrapper">
        <h1>Welcome to DigiSim.</h1>
        <h1>
          Press Make to start Making.
        </h1>
        <h1>
          Press Tutorial to look up the rules.
        </h1>
      </div>
    </div>
  )
}

export default Main;
