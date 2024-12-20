import React from 'react'
import { useState, useEffect} from 'react'

const Usestate = () => {
const[city,setCity]=useState("hyderbad");

useEffect(()=>{
city==="goa"?setCity("Vijayawada"):setCity("Kandrapadu")},[city])


  return (
    <div>
      {city}
    </div>
  )
}

export default Usestate
