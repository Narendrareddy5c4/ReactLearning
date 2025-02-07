import React, { useState } from 'react'

const Formman = () => {
    const[uName,setuName]=useState("")
    const[bName,setbName]=useState("")
    const getName=(event)=>{
        setuName(event.target.value)
    }
    const passName=(event)=>{
        setbName(uName)
    }
  return (
    <section>
    <div>
        <h1>Hello {bName}</h1>
      <input type="text" placeholder='enter Name' onChange={getName}/>
      <br/>
      <button className='button' onClick={passName}>submit</button>
      
    </div>
    </section>
  )
}

export default Formman
