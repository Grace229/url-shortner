import React from 'react'
import Logo from '../assets/img/footer-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
<div className='footer-container'>
<div className='footer-items'>
    <img src={Logo} alt="Logo" />
</div>

<div className='footer-items'>
<h4>
Features
</h4>
<ul>
    <li>Link Shortening</li>
    <li>Branded Links</li>
    <li>Analytics</li>
</ul>
</div>
<div className='footer-items'>
<h4>
Resources
</h4>
<ul>
    <li>Blog</li>
    <li>Developers</li>
    <li>Support</li>
</ul>
</div>
<div className='footer-items'>
<h4>
Company
</h4>
<ul>
    <li>About</li>
    <li>Our Team</li>
    <li>Careers</li>
    <li>Contact</li>
</ul>
</div>
<div className='footer-items'>
<FontAwesomeIcon icon={faSquareFacebook} className="icons" />
<FontAwesomeIcon icon={faTwitter} className="icons" />
<FontAwesomeIcon icon={faPinterest} className="icons" />
<FontAwesomeIcon icon={faInstagram} className='icons' />


</div>
</div>
    </div>
  )
}

export default Footer