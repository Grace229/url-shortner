import React from 'react'
import Shorten from './shorten'

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
    <h1>
    Advanced Statistics
    </h1>
    <p>
Track how your links are performing across the web with our 
advanced statistics dashboard.
    </p>
    </div>
   <div className='cards'>
<div className='card'>
<div className='image-circle'>

</div>
</div>
   </div>
   </section>
   </div>
  )
}

export default main
 