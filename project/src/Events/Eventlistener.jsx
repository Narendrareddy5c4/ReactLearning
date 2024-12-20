import React from 'react'
import { useState, useEffect } from 'react'
const Eventlistener = () => {

    const[sS,setsS]=useState({
        w:window.innerWidth,
        h:window.innerHeight
    })
    const updateSS=()=>{
        setsS({
            w:window.innerWidth,
            h:window.innerHeight,
    })
    }
    useEffect(()=>{
        window.addEventListener('resize',updateSS);
        return()=>{
            window.removeEventListener('resize',updateSS);
        }

    },[])
  return (
    <div>
      <h3>w : {sS.w}</h3>
      <h3>h : {sS.h}</h3>
      
    </div>
  )
}

export default Eventlistener
