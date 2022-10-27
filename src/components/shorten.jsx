import React from 'react'

const shorten = () => {
  return (
    <div className='shorten'>
    <div className='shorten-box'>
        <div className='shorten-items'>
            <div className='input'>
        <input type="text" placeholder='Shorten a link here...' />
            </div>
            <div className='button'>
            <button>Shorten it!</button>
            </div>
        </div>       
    </div>
    <div className='results'>
        <div className='result'>
           <p>https://grace.com</p> 
           <div>
           <p>https://grace.com</p> 
           <button className='copy-button'>copy</button>
           </div>
          
        </div>
    </div>

    <div className='results'>
        <div className='result'>
           <p>https://grace.com</p> 
           <div>
           <p>https://grace.com</p> 
           <button className='copy-button'>copy</button>
           </div>
          
        </div>
    </div>

    <div className='results'>
        <div className='result'>
           <p>https://grace.com</p> 
           <div>
           <p>https://grace.com</p> 
           <button className='copy-button'>copy</button>
           </div>
          
        </div>
    </div>
    
    </div>
  )
}

export default shorten