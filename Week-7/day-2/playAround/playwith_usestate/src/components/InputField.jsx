import  { useState } from 'react'


export const InputField = () => {
    const [input , setInput ] = useState('')
  return (
    <>

        <input 
            style={ {margin:'15px'} }
            type="text"
            value={input}
            onChange={(e)=> setInput(e.target.value)}
         />

         <p>What i type : {input} </p>
    </>
  )
}


export default InputField