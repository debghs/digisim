import './navbar.css'
import React, {useContext} from 'react'
import { Link } from "react-router-dom";

import globalContext from '../../../services/globalContext'

function Navbar (props) {

  const {customProps} = useContext(globalContext);
  const {toggleModal} = customProps;

  return (
    <div className="navbar">
      <h1>DigiSim</h1>
      <div className="navbar-pages">
        <Link to='/canvas'>
          <p id="make">Make</p>
        </Link>
        <p id="tutorial" onClick={() => toggleModal()}>Tutorial</p>
      </div>
    </div>
  )
}

export default Navbar;
