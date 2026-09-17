import { useState } from 'react'

function String() {
  const[nombre, setNombre] = useState("santiago")
  return (
    <>
    <input
        type='text'
        onChange={(e) => setNombre(e.target.value)}  />      

        {nombre}
        
    </>
  )
}

export default String
