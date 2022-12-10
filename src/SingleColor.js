import React, { useState, useEffect } from 'react'
// import rgbToHex from './utils'

// rgb and weigh is a item in my lis i can check in console.log(lis)
const SingleColor = ({rgb, weight, index, hexColor}) => {
  const[alert, setalert] = useState(false)
  const bcg = rgb.join(",")  //all  rgb will be seperated by comms 

  // const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`
  useEffect(()=>{
     const timeOut = setTimeout(()=>{
       setalert(false);
     }, 1000)
     return ()=>clearTimeout(timeOut)
  },[alert])
  


  return (
    <article className={`color ${index >10 && "color-light"}`} style={{backgroundColor :`rgb(${bcg})`}} onClick={()=>{
      setalert(true);
      navigator.clipboard.writeText(hexValue)
    }}>
    
     <p className='percent-value'>
      {weight}%</p>
      <p className="color-value">{hexValue}</p>

      {alert && <p className="alert"> Copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
