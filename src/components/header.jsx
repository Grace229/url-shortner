import React from 'react'
import logo from "../assets/img/logo.svg"
const header = () => {
  return (
    <nav>

<ul className='Navbar'>
    <li>     
    <img src={logo} alt="" />
    </li>
    <li><a href="#">Features</a></li>
    <li><a href="#">Pricing</a></li>
    <li><a href="#">Resources</a></li>
</ul>
<div>
<button>Login</button>
<button>Signup</button>

</div>
    </nav>
  )
}

export default header