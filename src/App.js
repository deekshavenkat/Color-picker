import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const[color, setColor] = useState("");
  const[error, setError] = useState(false);
  const[list, setList] = useState(new Values("#f15025").all(5));


  const handleSubmit =(e)=>{
    e.preventDefault()
   try{
    let colors = new Values(color).all(5) // 5 is from one card to another card how much percentage of color should change 
    setError(false)
     setList(colors)
     
   } catch(error){
    setError(true)
    console.log(error)
   }

  
  }
  console.log(list)
  return(
    <>
      <section className='container'>
   <h3>Color generator </h3>
   <form onSubmit={handleSubmit}>
    <input type="text" value ={color}  onChange ={(e)=>setColor(e.target.value)} className={`${error ? "error" :null }`} placeholder =" Enter in this #f15025 formate"/>
    <button className ="btn" onClick={handleSubmit} type="submit">Submit</button>
   </form>
     </section>
     <section className="colors">
      <h4>List of colors goes here </h4>
      {list.map((lis, index)=>{
        // console.log(lis)
         return <SingleColor key={index} {...lis} index={index} hexColor ={lis.hex}/>
      })}
     </section>

    </>)
  
}

export default App
