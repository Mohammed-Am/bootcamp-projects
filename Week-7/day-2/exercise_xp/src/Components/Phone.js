import React, { useState } from 'react'

const Phone = () => {

    /*
        brand: "Samsung"
        model: "Galaxy S20"
        color: "black"
        year: 2020 
 */
         const [brand] = useState("Samsung")
         const [model] = useState("Galaxy S20")
         const [color , setColor] = useState("black")
         const [year] = useState(2020)

          const changeColor = () => {
                setColor('blue')
           }

  return (
   
        <>
           <h1>My Phone is a {brand} </h1>
           <p>it's a {color} {model} from {year}</p>
            <button onClick={changeColor}>Change Color</button>
        </>
  )
}

export default Phone