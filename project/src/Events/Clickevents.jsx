import React from 'react'
import { useState } from 'react';
const Clickevents = () => {

    const[num,setNum]=useState(1);
    const multple=()=>{
        setNum(num*2)

    }
    const divd=()=>{
        if(num>1)
        setNum(num/2)

    }
   
  return (
    <div>
      {num}
      <br />
      <button onClick={multple}>mutliple by 2</button>
      <button onClick={divd}>divided by 2</button>
    </div>
  )
}

export default Clickevents
