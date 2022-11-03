import React, { useState } from 'react'
import axios from "axios";

const Shorten = () => {
    const [url, setUrl] = useState("");
    const [results, setResult] = useState([])
    const handleChange = (e) => {
        e.preventDefault();
        setUrl({
            url : e.target.value
       })
       console.log(url)
    }
    const submitForm = (e) =>{
        e.preventDefault();
        axios.get(`https://api.shrtco.de/v2/shorten`, { params:  url})
        .then((res) =>{
            let data = res.data.result
            // results.push(data)
            setResult([{...data}])
            console.log(results)
        })
    }
  return (
    <div className='shorten'>
    <div className='shorten-box'>
        <div className='shorten-items'>
            <form className='shorten-items' onSubmit={submitForm}>
            <div className='input'>
        <input type="text" name='url' onInput={handleChange} placeholder='Shorten a link here...' />
            </div>
            <div className='button'>
            <button type='submit'>Shorten it!</button>
            </div>
            </form>
         
        </div>       
    </div>
 { results && results.map((result, i) => {
    return (
    <div className='results' >
        <div className='result' key={i}>
           <p>{result?.original_link}</p> 
           <div className='result-text'>
           <p>{result?.full_short_link}</p> 
           <button className='copy-button'>copy</button>
           </div>
          
        </div>
    </div>
    )
    })} 
    </div>
  )
}

export default Shorten