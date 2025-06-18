import React, { useState } from 'react'





const Events = () => {
    const [input,setInput] = useState('')
    const [ToggleOn , isToggleOn] = useState(true)
    const clickme  = ()=>{
      return alert('I was clicked')
     }

  
      const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
            return alert(`The Enter key was pressed, your input is: ${input}`);
            }
      };

        const handleChange = (event) => {
            setInput(event.target.value); 
        };
        const switching = ()=>{
                isToggleOn(!ToggleOn)
        }

  return (
        <>
            <input 
                onKeyDown={handleKeyDown} 
                onChange={handleChange}
                placeholder='Press the Enter key!'
                type='text'
                value= {input}
             />
             <br></br>
            <button onClick={clickme}>OK</button>


            <button onClick={switching}>{ToggleOn ? 'ON' : 'OFF'}</button>
        </>
     
  )
}

export default Events