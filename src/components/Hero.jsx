import React from 'react'
import heroImg from '../assets/img/illustration-working.svg'

const Hero = () => {
  return (
    <div className='Container-Full'>
       <div className='hero-text'>
        <h1>More than just shorter links</h1>
<p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
<div>
    <button>Get Started</button>
</div>
       </div> 
        <div className='hero-image'>
            <img src={heroImg} alt="" />
        </div>
    </div>
  )
}

export default Hero