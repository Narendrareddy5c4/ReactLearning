import React from 'react'
import Components from './Components'
const Iphones=()=>{
    return(
        <h2> iphone 15 </h2>
    )
}

const Airpods=()=>{
    return(
        <h2>Airpods pro</h2>
    )
}
function Apple() {
  return (
    <div>
      <h1>Apple Store</h1>
      <Iphones></Iphones>
      <Airpods />
      <Components/>
    </div>
  )
}

export default Apple
