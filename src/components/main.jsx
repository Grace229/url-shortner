import React from 'react'
import Shorten from './Shorten'

const main = () => {
  return (
    <div>
   <section className='Main'>
    <div className='shorten-container'>
    <Shorten />
    </div>
   </section>
   <section className='advanced-statistics'>
    <div className='first-div'>
    <h1 className='advanced-statistics-title'>
    Advanced Statistics
    </h1>
    <p className='advanced-statistics-text'>
Track how your links are performing across the web with our 
advanced statistics dashboard.
    </p>
    </div>
   <div className='cards'>
  
<div className='card-wrapper'>
<div className='card'>
<div className='image-circle'>
</div>
<div className='body-text'>
<h1 className='card-title'> Brand Recognition</h1>
<p className='card-text'> Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.</p>
</div>
</div>
</div>
<div className='border'></div>
<div className='card-wrapper'>
<div className='card1'>
<div className='image-circle1'>
</div>
<div className='body-text'>
<h1 className='card-title'>Detailed Records
</h1>
<p className='card-text'>
Gain insights into who is clicking your links. Knowing when and where 
people engage with your content helps inform better decisions.
</p>
</div>
</div>
</div>
<div className='border'></div>

<div className='card-wrapper'>
<div className='card2'>
<div className='image-circle2'>
</div>
<div className='body-text'>
<h1 className='card-title'> Fully Customizable</h1>
<p className='card-text'>
Improve brand awareness and content discoverability through customizable 
links, supercharging audience engagement.</p>
</div>
</div>
</div>
   </div>
   </section>
   </div>
  )
}

export default main
 