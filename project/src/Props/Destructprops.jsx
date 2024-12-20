import React from 'react'

const Destructprops = (prop) => {

    const{model,year,ram}=prop.ph;
  return (
    <div>
     <h2>{model}</h2> 
     <h2>{year}</h2>
     <h2>{ram}</h2>
    </div>
  )
}

export default Destructprops
