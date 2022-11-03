import React from 'react'
import logo from "../assets/img/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <nav>
    <img src={logo} alt="" />
 <div className='nav'>
 <ul className='Navbar'>
    <li><a href="#">Features</a></li>
    <li><a href="#">Pricing</a></li>
    <li><a href="#">Resources</a></li>
</ul>
<div>
<button className='first-button'>Login</button>
<button className='second-button'>Signup</button>
</div>
 </div>

<FontAwesomeIcon icon={faBars} className="icons" />
    </nav>
  )
}

export default Header